// Framework
import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import { up } from 'styled-breakpoints';
import InfiniteScroll from 'react-infinite-scroller';

// Components
import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Axios from 'axios';

type GalleryPhoto = {
  farm: string,
  server: string,
  id: string,
  secret: string,
  title: string
};

const BASE_URL = 'https://www.flickr.com/services/rest/?';
const BASE_PARAMS = {
  api_key: '3433323375a1c4cb9baa5d2ade6a9685',
  gallery_id: '72157690638331410',
  method: 'flickr.galleries.getPhotos',
  format: 'json',
  nojsoncallback: '1',
  per_page: '10'
};

const CardImg = styled(Card.Img).attrs({ variant: 'top' })`
  width: 100%;
  object-fit: cover;

  ${up('md')} {
    height: 25rem;
  }
`;

const CardTitle = styled(Card.Title)`
  text-align: right;
  text-shadow: 0.075em 0.08em 0.1em rgba(0, 0, 0, 1);
`;

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async (params: any) => {
    try {
      setLoading(true);
      const {
        data: {
          photos: { pages, perpage, photo: newPhotos, total }
        }
      } = await Axios.get(`${BASE_URL}${params}`);
      setLoading(false);
      if (page >= pages) {
        setHasNextPage(false);
      }

      setPhotos(photos.concat(newPhotos));
      setPage(page + 1);
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={async () => {
        if (!loading) {
          const URL_PARAMS = new URLSearchParams({
            ...BASE_PARAMS,
            page: page.toString()
          }).toString();
          console.log('calling loadmore');
          await fetchData(URL_PARAMS);
        }
      }}
      hasMore={hasNextPage}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <Row>
        {photos.map(({ farm, server, id, secret, title }: GalleryPhoto) => (
          <Col md={4} xl={2} key={id} className="p-1">
            <Card className="text-white">
              <CardImg
                src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
                alt={title}
              />
              <Card.ImgOverlay>
                <CardTitle>{title.length ? title : 'Untitled'}</CardTitle>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </InfiniteScroll>
  );
}

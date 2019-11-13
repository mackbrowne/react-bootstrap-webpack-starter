// Framework
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// Components
import { Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import PhotoCard, { GalleryPhoto } from '../common/PhotoCard';

const BASE_URL = 'https://www.flickr.com/services/rest/?';
const BASE_PARAMS = {
  api_key: '3433323375a1c4cb9baa5d2ade6a9685',
  gallery_id: '72157690638331410',
  method: 'flickr.galleries.getPhotos',
  format: 'json',
  nojsoncallback: '1',
  per_page: '10'
};

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async (params: any) => {
    try {
      if (!loading) {
        setLoading(true);
        const {
          data: {
            photos: { pages, photo: newPhotos }
          }
        } = await Axios.get(`${BASE_URL}${params}`);

        if (page >= pages) {
          setHasNextPage(false);
        }

        setPhotos(photos.concat(newPhotos));
        setPage(page + 1);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={() => {
        fetchData(
          `${new URLSearchParams({
            ...BASE_PARAMS,
            page: `${page}`
          })}`
        );
      }}
      hasMore={hasNextPage}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <Row>
        {photos.map((photo: GalleryPhoto) => (
          <Col md={4} xl={2} key={photo.id} className="p-1">
            <PhotoCard photo={photo} />
          </Col>
        ))}
      </Row>
    </InfiniteScroll>
  );
}

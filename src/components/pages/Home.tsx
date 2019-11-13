// Framework
import React from 'react';
import useAxios from 'axios-hooks';
import { up } from 'styled-breakpoints';

// Components
import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

type GalleryPhoto = {
  farm: string,
  server: string,
  id: string,
  secret: string,
  title: string
};

/**
 * Homepage for the app!
 *
 * @param {Object} props All the properties passed to the React Component.
 * @returns {StatelessComponent} Stateless functional React component.
 */
export default function Home() {
  const BASE_URL = 'https://www.flickr.com/services/rest/?';
  const URL_PARAMS = new URLSearchParams({
    api_key: '3433323375a1c4cb9baa5d2ade6a9685',
    gallery_id: '72157690638331410',
    method: 'flickr.galleries.getPhotos',
    format: 'json',
    nojsoncallback: '1'
  }).toString();

  // Get Photo List
  const [
    { data: galleryData, loading: galleryLoading, error: galleryError }
  ] = useAxios(`${BASE_URL}${URL_PARAMS}`);

  if (galleryLoading) return <p>Loading...</p>;
  if (galleryError) return <p>Error!</p>;

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

  const {
    photos: { photo: photoList }
  } = galleryData;
  console.log(photoList);

  return (
    <Row>
      {photoList.map(({ farm, server, id, secret, title }: GalleryPhoto) => (
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
  );
}

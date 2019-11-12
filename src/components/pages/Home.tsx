// Framework
import React from 'react';
import useAxios from 'axios-hooks';

// Components
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

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

  return (
    <Container fluid>
      <Row>
        <Col>
          {galleryData.photos.photo.map(
            ({ farm, server, id, secret, title }: GalleryPhoto) => (
              <Image
                key={id}
                src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
                alt={title}
              />
            )
          )}
        </Col>
      </Row>
    </Container>
  );
}

// Framework
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// Components
import { Row } from 'react-bootstrap';
import Axios from 'axios';
import PhotoCard, { GalleryPhoto } from '../common/PhotoCard';
import Loader from '../common/Loader';

const BASE_URL = 'https://www.flickr.com/services/rest/?';
const BASE_PARAMS = {
  api_key: 'aa9bd4bc5372aef541bf068bb7c3ee19',
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

  const fetchData = async () => {
    try {
      if (!loading) {
        const params = `${new URLSearchParams({
          ...BASE_PARAMS,
          page: `${page}`
        })}`;
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
      loadMore={fetchData}
      hasMore={hasNextPage}
      loader={<Loader key={0} />}
    >
      <Row>
        {photos.map((photo: GalleryPhoto) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </Row>
    </InfiniteScroll>
  );
}

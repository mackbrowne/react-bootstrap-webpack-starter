import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import PhotoCard, { GalleryPhoto } from '../PhotoCard';
import { ThemeProvider } from 'styled-components';

describe('<Navigation /> Snapshot', () => {
  const render = (photo: GalleryPhoto) =>
    mount(
      <ThemeProvider
        theme={{
          breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px'
          }
        }}
      >
        <PhotoCard photo={photo} />
      </ThemeProvider>
    );

  it('renders PhotoCard', () => {
    const wrapper = render({
      farm: 'testFarm',
      server: 'testSvr',
      id: '12345',
      secret: 'SECRET_ID',
      title: 'Test Title'
    });
    expect(wrapper).toMatchSnapshot();
  });
});

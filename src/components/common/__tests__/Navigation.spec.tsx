import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation, { NavItemType } from '../Navigation';

describe('<Navigation /> Snapshot', () => {
  const render = (navigationItems: NavItemType[]) =>
    mount(
      <Router>
        <Navigation navigationItems={navigationItems} />
      </Router>
    );

  it('renders empty list', () => {
    const wrapper = render([]);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders links', () => {
    const wrapper = render([
      {
        label: 'Link1',
        path: '/link1'
      },
      {
        label: 'Link2',
        path: '/link2'
      },
      {
        label: 'Link3',
        path: '/link3'
      }
    ]);
    expect(wrapper).toMatchSnapshot();
  });
});

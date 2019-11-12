import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from '../AppLayout';

describe('<AppLayout /> Snapshot', () => {
  const render = () =>
    mount(
      <Router>
        <AppLayout />
      </Router>
    );
  it('renders snapshot with no props', () => {
    const wrapper = render();
    expect(wrapper).toMatchSnapshot();
  });
});

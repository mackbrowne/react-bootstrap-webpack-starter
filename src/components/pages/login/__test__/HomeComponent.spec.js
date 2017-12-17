import React from 'react';
import { mount } from 'enzyme';

import Home from '../HomeComponent';

describe('<Home /> Snapshot', () => {
  it('renders snapshot with no props', () => {
    const wrapper = mount(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});

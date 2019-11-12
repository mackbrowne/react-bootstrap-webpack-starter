import React from 'react';
import { mount } from 'enzyme';

import NotFound from '../NotFound';

describe('<NotFound /> Snapshot', () => {
  it('renders snapshot with no props', () => {
    const wrapper = mount(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';

import Photos from '../Photos';

describe('<Photos /> Snapshot', () => {
  it('renders snapshot with no props', () => {
    const wrapper = mount(<Photos />);
    expect(wrapper).toMatchSnapshot();
  });
});

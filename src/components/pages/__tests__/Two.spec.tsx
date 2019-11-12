import React from 'react';
import { mount } from 'enzyme';

import Two from '../Two';

describe('<Two /> Snapshot', () => {
  it('renders snapshot with no props', () => {
    const wrapper = mount(<Two />);
    expect(wrapper).toMatchSnapshot();
  });
});

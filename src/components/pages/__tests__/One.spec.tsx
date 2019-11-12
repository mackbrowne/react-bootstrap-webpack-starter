import React from 'react';
import { mount } from 'enzyme';

import One from '../One';

describe('<One /> Snapshot', () => {
  it('renders snapshot with no props', () => {
    const wrapper = mount(<One />);
    expect(wrapper).toMatchSnapshot();
  });
});

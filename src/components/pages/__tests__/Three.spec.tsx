import React from 'react';
import { mount } from 'enzyme';

import Three from '../Three';

describe('<Three /> Snapshot', () => {
  it('renders snapshot with no props', () => {
    const wrapper = mount(<Three />);
    expect(wrapper).toMatchSnapshot();
  });
});

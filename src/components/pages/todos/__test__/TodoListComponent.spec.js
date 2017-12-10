import React from 'react';
import { mount } from 'enzyme';

import TodoList from '../TodoListComponent';

describe('<TodoList /> Snapshot', () => {
  it('renders snapshot with no props', () => {
    const wrapper = mount(<TodoList />);
    expect(wrapper).toMatchSnapshot();
  });
});

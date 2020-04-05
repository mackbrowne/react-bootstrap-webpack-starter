import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./hooks/useIdea', () => () => ({
  data: { title: 'test title', label: 'test underline description' },
  isLoading: false
}));

describe('App Main Page', () => {
  const getCleanVersion = ({ getByText }) => getByText(/Clean Version/i);
  const getTitle = ({ getByText }) => getByText(/title/i);
  const getSubTitle = ({ getByText }) => getByText(/description/i);

  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });

  test('title', () => expect(getTitle(wrapper)).toBeInTheDocument());
  test('title', () => expect(getSubTitle(wrapper)).toBeInTheDocument());
  test('clean link', () =>
    expect(getCleanVersion(wrapper)).toBeInTheDocument());
});

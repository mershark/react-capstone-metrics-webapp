import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
// import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import HomePage from '../components/HomePage';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('HomePage component', () => {
  it('displays loading state', () => {
    useSelector.mockReturnValue({
      loading: true,
      error: null,
      items: [],
      filteredItems: [],
      isSearching: false,
    });

    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByText } = render(<HomePage />);

    const loadingText = getByText('Loading, please wait!');
    expect(loadingText).toBeInTheDocument();
  });
});

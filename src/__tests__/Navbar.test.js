import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { filterItems, setIsSearching } from '../redux/companyDataSlice';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Navbar component', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  it('renders the component correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Navbar />);

    expect(getByText('2023')).toBeInTheDocument();
    expect(getByText('most active')).toBeInTheDocument();
    expect(getByPlaceholderText('Search company name here...')).toBeInTheDocument();
  });

  it('dispatches actions when input value changes', () => {
    const { getByPlaceholderText } = render(<Navbar />);
    const inputElement = getByPlaceholderText('Search company name here...');

    const inputValue = 'Apple';
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(dispatchMock).toHaveBeenCalledWith(setIsSearching(inputValue));
    expect(dispatchMock).toHaveBeenCalledWith(filterItems(inputValue));
  });
});

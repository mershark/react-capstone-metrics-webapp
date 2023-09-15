import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getByText } from '@testing-library/dom';
import CompanyInfoPage from '../components/CompanyInfoPage';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('CompanyInfoPage component', () => {
  it('displays loading state while fetching company info', async () => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({ loading: true, errorMessage: null });
    useParams.mockReturnValue({ symbol: 'ABC' });

    const { container } = render(<CompanyInfoPage />);

    const loadingText = getByText(container, 'Loading, please wait!');
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      expect(loadingText).not.toBeInTheDocument();
    });
  });
});

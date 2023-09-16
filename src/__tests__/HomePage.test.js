import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import HomePage from '../components/HomePage';
import '@testing-library/jest-dom';

const mockStore = configureMockStore();
const store = mockStore({
  companyData: {
    loading: false,
    error: null,
    items: [
      { name: 'Company 1', price: 100, symbol: 'C1' },
      { name: 'Company 2', price: 200, symbol: 'C2' },
    ],
    filteredItems: [],
    isSearching: false,
  },
});

describe('HomePage component', () => {
  it('renders without errors', () => {
    const { queryByText, getAllByTestId } = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );

    expect(queryByText('Loading, please wait!')).toBeNull();

    expect(queryByText('Error loading data, please try again!')).toBeNull();

    expect(queryByText('No Match found')).toBeNull();

    const companyNames = getAllByTestId('company-name');
    expect(companyNames.length).toBeGreaterThan(0);
    expect(companyNames[0]).toHaveTextContent('Company 1');

    const companySymbols = getAllByTestId('company-symbol');
    expect(companySymbols.length).toBeGreaterThan(0);
    expect(companySymbols[0]).toHaveTextContent('C1');

    const companyPrices = getAllByTestId('company-price');
    expect(companyPrices.length).toBeGreaterThan(0);
    expect(companyPrices[0]).toHaveTextContent('100');
  });
});

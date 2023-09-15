import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SingleCompanyInfo from '../components/SingleCompanyInfo';
import '@testing-library/jest-dom';

test('renders SingleCompanyInfo component correctly', () => {
  // Render the component within the necessary context
  const { getByText, getByAltText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <SingleCompanyInfo />
      </BrowserRouter>
    </Provider>,
  );

  const ceoElement = getByText('Ceo:');
  expect(ceoElement).toBeInTheDocument();

  const currencyElement = getByText('Currency:');
  expect(currencyElement).toBeInTheDocument();

  const countryElement = getByText('Country:');
  expect(countryElement).toBeInTheDocument();

  const sectorElement = getByText('Sector:');
  expect(sectorElement).toBeInTheDocument();

  const cityElement = getByText('City:');
  expect(cityElement).toBeInTheDocument();

  const phoneElement = getByText('Phone:');
  expect(phoneElement).toBeInTheDocument();

  const websiteElement = getByText('Website:');
  expect(websiteElement).toBeInTheDocument();

  const imageElement = getByAltText('Logo');
  expect(imageElement).toBeInTheDocument();
});

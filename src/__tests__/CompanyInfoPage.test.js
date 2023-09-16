import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CompanyInfoPage from '../components/CompanyInfoPage';

test('Check if CompanyInfoPage component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <CompanyInfoPage />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});

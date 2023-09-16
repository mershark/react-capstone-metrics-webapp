import { configureStore } from '@reduxjs/toolkit';
import companyDataReducer from './companyDataSlice';

const store = configureStore({
  reducer: {
    companyData: companyDataReducer,
  },
});

export default store;

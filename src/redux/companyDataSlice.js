import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filteredItems: [],
  isSearching: false,
  companyInfo: {},
  loading: false,
  errorMessage: '',
};

const API_KEY = '5fbe9cab100cf9088b79145508f2de05';

export const fetchCompanyData = createAsyncThunk('companyData/fetchCompanyData', async () => {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${API_KEY}`);
  const data = await response.json();
  return data;
});

export const fetchSingleCompanyInfo = createAsyncThunk('companyData/fetchSingleCompanyInfo', async (symbol) => {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${API_KEY}`);
  const data = await response.json();
  return data[0];
});

const companyDataSlice = createSlice({
  name: 'companyData',
  initialState,
  reducers: {
    filterItems: (state, action) => {
      // eslint-disable-next-line max-len
      state.filteredItems = state.items.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()));
    },
    setIsSearching: (state, action) => {
      state.isSearching = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompanyData.fulfilled, (state, action) => {
        state.loading = false;
        state.errorMessage = '';
        state.items = action.payload;
      })
      .addCase(fetchCompanyData.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
      })
      .addCase(fetchSingleCompanyInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCompanyInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.errorMessage = '';
        state.companyInfo = action.payload;
      })
      .addCase(fetchSingleCompanyInfo.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export const { filterItems, setIsSearching } = companyDataSlice.actions;
export default companyDataSlice.reducer;

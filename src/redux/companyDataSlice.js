import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filteredItems: [],
  isSearching: false,
  companyInfo: {},
  loading: false,
  errorMessage: '',
};

const API_KEY = 'd7b49b7284d78cbb0fd2441ec7cd0f9b';

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
      state.filteredItems = state.items.filter((item) => {
        const output = item.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
        return output;
      });
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

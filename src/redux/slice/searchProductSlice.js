import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsApi from '../../api/productsApi';

export const getProductSearch = createAsyncThunk('getSearch', async search => {
  const currentProducts = await productsApi.getProductSearch(search);
  return currentProducts;
});

const searchProductSlice = createSlice({
  name: 'searchProductSlice',
  initialState: {
    listProduct: '',
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [getProductSearch.pending]: state => {
      state.loading = true;
    },

    [getProductSearch.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getProductSearch.fulfilled]: (state, action) => {
      state.listProduct = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: searchProductReducer } = searchProductSlice;
export default searchProductReducer;

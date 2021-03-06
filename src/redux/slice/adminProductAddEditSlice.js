import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productsApi from '../../api/productsApi';

export const postProduct = createAsyncThunk('postProduct', async product => {
  const currentProduct = await productsApi.postProduct(product);
  return currentProduct;
});
export const getProductDetail = createAsyncThunk(
  'getProductDetail',
  async productId => {
    const currentGetProductDetail = await productsApi.getProductDetail(
      productId
    );
    return currentGetProductDetail;
  }
);
export const putProduct = createAsyncThunk(
  'putProduct',
  async ({ productId, product }) => {
    const currentPutProduct = await productsApi.putProduct(productId, product);
    return currentPutProduct;
  }
);

const adminProductAddEditSlice = createSlice({
  name: 'adminProductAddEditSlice',
  initialState: {
    successError: '',
    loading: false,
    loadingGetProduct: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // post product
    [postProduct.pending]: state => {
      state.loading = true;
    },

    [postProduct.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postProduct.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // put product
    [putProduct.pending]: state => {
      state.loading = true;
    },

    [putProduct.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [putProduct.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // get product
    [getProductDetail.pending]: state => {
      state.loadingGetProduct = true;
    },

    [getProductDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loadingGetProduct = false;
    },

    [getProductDetail.fulfilled]: (state, action) => {
      state.loadingGetProduct = false;
    },
  },
});

const { reducer: productAddEditReducer } = adminProductAddEditSlice;
export default productAddEditReducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import worksDonesApi from '../../api/worksDonesApi';

export const postWorksDone = createAsyncThunk(
  'postWorksDone',
  async worksDone => {
    const currentWorksDone = await worksDonesApi.postWorksDone(worksDone);
    return currentWorksDone;
  }
);
export const getWorksDoneDetail = createAsyncThunk(
  'getWorksDoneDetail',
  async worksDoneId => {
    const currentGetWorksDoneDetail = await worksDonesApi.getWorksDoneDetail(
      worksDoneId
    );
    return currentGetWorksDoneDetail;
  }
);
export const putWorksDone = createAsyncThunk(
  'putWorksDone',
  async ({ worksDoneId, worksDone }) => {
    const currentPutWorksDone = await worksDonesApi.putWorksDone(
      worksDoneId,
      worksDone
    );
    return currentPutWorksDone;
  }
);

const adminWorksDoneAddEditSlice = createSlice({
  name: 'adminWorksDoneAddEditSlice',
  initialState: {
    successError: '',
    loading: false,
    loadingGetWorksDone: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // post product
    [postWorksDone.pending]: state => {
      state.loading = true;
    },

    [postWorksDone.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postWorksDone.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // put product
    [putWorksDone.pending]: state => {
      state.loading = true;
    },

    [putWorksDone.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [putWorksDone.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // get product
    [getWorksDoneDetail.pending]: state => {
      state.loadingGetWorksDone = true;
    },

    [getWorksDoneDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loadingGetWorksDone = false;
    },

    [getWorksDoneDetail.fulfilled]: (state, action) => {
      state.loadingGetWorksDone = false;
    },
  },
});

const { reducer: worksDoneAddEditReducer } = adminWorksDoneAddEditSlice;
export default worksDoneAddEditReducer;

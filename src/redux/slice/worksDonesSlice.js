import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import worksDonesApi from '../../api/worksDonesApi';

export const getWorksDones = createAsyncThunk('getWorksDones', async () => {
  const currentWorksDones = await worksDonesApi.getWorksDones();
  return currentWorksDones;
});
export const getWorksDonesHome = createAsyncThunk(
  'getWorksDonesHome',
  async () => {
    const currentWorksDonesHome = await worksDonesApi.getWorksDonesHome();
    return currentWorksDonesHome;
  }
);
export const getWorksDoneDetail = createAsyncThunk(
  'getWorksDoneDetail',
  async worksDoneId => {
    const currentWorksDoneDetail = await worksDonesApi.getWorksDoneDetail(
      worksDoneId
    );
    return currentWorksDoneDetail;
  }
);

const worksDonesSlice = createSlice({
  name: 'worksDonesSlice',
  initialState: {
    worksDones: [],
    worksDoneDetail: [],
    loading: false,
    error: '',
  },
  reducers: {
    removeWorksDone: (state, action) => {
      const removeWorksDoneId = action.payload;
      state.worksDones = state.worksDones.filter(
        e => e.id !== removeWorksDoneId
      );
    },
    getWorksDoneDetailEmpty: (state, action) => {
      state.worksDoneDetail = [];
    },
  },
  extraReducers: {
    [getWorksDones.pending]: state => {
      state.loading = true;
    },

    [getWorksDones.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getWorksDones.fulfilled]: (state, action) => {
      state.worksDones = action.payload;
      state.loading = false;
    },

    [getWorksDonesHome.pending]: state => {
      state.loading = true;
    },

    [getWorksDonesHome.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getWorksDonesHome.fulfilled]: (state, action) => {
      state.worksDones = action.payload;
      state.loading = false;
    },

    [getWorksDoneDetail.pending]: state => {
      state.loading = true;
    },

    [getWorksDoneDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getWorksDoneDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.worksDoneDetail.push(action.payload);
    },
  },
});

const { reducer: worksDonesReducer, actions } = worksDonesSlice;
export const { removeWorksDone, getWorksDoneDetailEmpty } = actions;
export default worksDonesReducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogsApi from '../../api/blogsApi';

export const postBlog = createAsyncThunk('postBlog', async blog => {
  const currentBlog = await blogsApi.postBlog(blog);
  return currentBlog;
});
export const getBlogDetail = createAsyncThunk(
  'getBlogDetail',
  async blogId => {
    const currentGetBlogDetail = await blogsApi.getBlogDetail(
        blogId
    );
    return currentGetBlogDetail;
  }
);
export const putBlog = createAsyncThunk(
  'putBlog',
  async ({ blogId, blog }) => {
    const currentPutBlog = await blogsApi.putBlog(blogId, blog);
    return currentPutBlog;
  }
);

const adminBlogAddEditSlice = createSlice({
  name: 'adminBlogAddEditSlice',
  initialState: {
    successError: '',
    loading: false,
    loadingGetBlog: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // post product
    [postBlog.pending]: state => {
      state.loading = true;
    },

    [postBlog.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [postBlog.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // put product
    [putBlog.pending]: state => {
      state.loading = true;
    },

    [putBlog.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [putBlog.fulfilled]: (state, action) => {
      state.successError = action.payload;
      state.loading = false;
    },

    // get product
    [getBlogDetail.pending]: state => {
      state.loadingGetBlog = true;
    },

    [getBlogDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loadingGetBlog = false;
    },

    [getBlogDetail.fulfilled]: (state, action) => {
      state.loadingGetBlog = false;
    },
  },
});

const { reducer: blogAddEditReducer } = adminBlogAddEditSlice;
export default blogAddEditReducer;

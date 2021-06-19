import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogsApi from '../../api/blogsApi';

export const getBlogs = createAsyncThunk('getBlogs', async () => {
  const currentBlogs = await blogsApi.getBlogs();
  return currentBlogs;
});
export const getBlogsHome = createAsyncThunk('getBlogsHome', async () => {
  const currentBlogsHome = await blogsApi.getBlogsHome();
  return currentBlogsHome;
});
export const getBlogDetail = createAsyncThunk(
  'getBlogDetail',
  async blogId => {
    const currentBlogDetail = await blogsApi.getBlogDetail(blogId);
    return currentBlogDetail;
  }
);

const blogsSlice = createSlice({
  name: 'blogsSlice',
  initialState: {
    blogs: [],
    blogDetail: [],
    loading: false,
    error: '',
  },
  reducers: {
    removeBlog: (state, action) => {
      const removeBlogId = action.payload;
      state.blogs = state.blogs.filter(e => e.id !== removeBlogId);
    },
    getBlogDetailEmpty: (state, action) => {
      state.blogDetail = [];
    },
  },
  extraReducers: {
    [getBlogs.pending]: state => {
      state.loading = true;
    },

    [getBlogs.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },

    [getBlogsHome.pending]: state => {
      state.loading = true;
    },

    [getBlogsHome.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getBlogsHome.fulfilled]: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },

    [getBlogDetail.pending]: state => {
      state.loading = true;
    },

    [getBlogDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getBlogDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogDetail.push(action.payload);
    },
  },
});

const { reducer: blogsReducer, actions } = blogsSlice;
export const { removeBlog, getBlogDetailEmpty } = actions;
export default blogsReducer;

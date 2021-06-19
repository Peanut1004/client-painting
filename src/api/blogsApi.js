import axiosClient from './axiosClient';

const blogsApi = {
  getBlogs: () => {
    const url = '/blogs';
    return axiosClient.get(url);
  },
  getBlogsHome: () => {
    const url = '/blogs?_page=1&_limit=3';
    return axiosClient.get(url);
  },
  getBlogDetail: blogId => {
    const url = `/blogs/${blogId}`;
    return axiosClient.get(url);
  },
  postBlog: newBlog => {
    const url = `/blogs`;
    return axiosClient.post(url, newBlog);
  },

  deleteBlog: blogId => {
    const url = `/blogs/${blogId}`;
    return axiosClient.delete(url);
  },

  putBlog: (blogId, newBlog) => {
    const url = `/blogs/${blogId}`;
    return axiosClient.put(url, newBlog);
  },
};

export default blogsApi;

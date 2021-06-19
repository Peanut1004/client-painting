import axiosClient from './axiosClient';

const worksDonesApi = {
  getWorksDones: () => {
    const url = '/worksDones';
    return axiosClient.get(url);
  },

  getWorksDonesHome: () => {
    const url = '/worksDones?_page=1&_limit=4';
    return axiosClient.get(url);
  },

  getWorksDoneDetail: worksDoneId => {
    const url = `/worksDones/${worksDoneId}`;
    return axiosClient.get(url);
  },

  postWorksDone: newWorksDone => {
    const url = `/worksDones`;
    return axiosClient.post(url, newWorksDone);
  },

  deleteWorksDone: worksDoneId => {
    const url = `/worksDones/${worksDoneId}`;
    return axiosClient.delete(url);
  },

  putWorksDone: (worksDoneId, newWorksDone) => {
    const url = `/worksDones/${worksDoneId}`;
    return axiosClient.put(url, newWorksDone);
  },
};

export default worksDonesApi;

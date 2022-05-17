import Axios from 'axios';
import baseURL, { urls } from './Urls';

// const appkey = 'mallzjw_1650121094859';
const appkey = 'dd_1597654682810';

const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});
request.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
}, (error) => Promise.reject(error));

request.interceptors.response.use((val) => val.data)

export const getsidebar = (type) => request.get(urls.getsidebar, {
  params: {
    type,
  },
});

export const getGoodsList = (type, page, size, sort) => request.get(urls.getGoodsList, {
  params: { type, page, size, sort }
});

export const search = (type, page, size) => request.get(urls.search, {
  params: { type, page, size }
});

export const likeSearch = (value) => request.get(urls.likeSearch, {
  params: { likeValue: value, }
});

export const getGoodsByIds = (value) => request.get(urls.getGoodsByIds, {
  params: { value, }
});

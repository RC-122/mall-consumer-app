import Axios from 'axios';
import baseURL, { urls } from './Urls';

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

request.interceptors.response.use((val)=>val.data)

export const getsidebar = (type) => request.get(urls.getsidebar, {
  params: {
    type,
  },
});

export const getGoodsList = () => { };

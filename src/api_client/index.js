import axios from 'axios';
import { config } from '../app.config';

export const BASE_API_URL = `${config.url}/`;

const request = (method, path, params, data = {}) => {

  const headers = {}

  return axios({
    method,
    data,
    headers,
    url: path,
    params: params,
    baseURL: BASE_API_URL,
  })
    .then(response => response.data ? response.data : response)
    .catch(err => new Promise((resolve, reject) => {
      if (err.response && err.response.data) {
        const error = err.response.data;
        if (typeof error !== 'string') {
          error.status = err.response.status;
        }
        return reject(error);
      } else if (err.request && err.request.data) {
        return reject(err.request);
      }
    }));
};

export const post = (path, params, data) => {
  return request('post', path, params, data);
};

export const get = (path, params) => {
  return request('get', path, params);
};

export const patch = (path, params, data) => {
  return request('patch', path, params, data);
};

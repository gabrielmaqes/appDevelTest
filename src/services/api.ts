import axios from 'axios';

export const serverURL = 'http://192.168.0.108:3333';

const api = axios.create({
  baseURL: serverURL,
});

export default api;

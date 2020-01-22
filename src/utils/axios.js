import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://78.47.71.38:8800',
  timeout: 10000,
  headers: {
    Authorization: {
      toString() {
        return `Bearer ${localStorage.getItem('jwt')}`;
      },
    },
  },
});

export default axiosInstance;

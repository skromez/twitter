import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 10000,
  headers: {
    Authorization: {
      toString() {
        if (sessionStorage.getItem('jwt')) return `Bearer ${sessionStorage.getItem('jwt')}`;
        return `Bearer ${localStorage.getItem('jwt')}`;
      },
    },
  },
});

export default axiosInstance;

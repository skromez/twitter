import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});


export default class TwitterService {

  createUser = async (info) => {
    try {
      const res = await axiosInstance.post('/user', {
        firstName: info.firstName,
        lastName: info.lastName,
        login: info.login,
        password: info.password,
        location: info.location,
      });
      return res
    } catch (err) {
      return err.response.data
    }
  };

  loginUser = async (info) => {
    try {
      const res = await axiosInstance.post('auth/login', {
        login: info.login,
        password: info.password,
      });
      return res
    } catch (err) {
      return err.response.data
    }
  }
}

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

  getUserInfo = async () => {
    if (localStorage.getItem('jwt')) {
      try {
        const res = await axiosInstance.get('/user');
        console.log(res.data);
        return res.data
      } catch (err) {
        console.log(err.response.data);
        return err.response.data
      }
    }
  };

  loginUser = async (info) => {
    try {
      const res = await axiosInstance.post('/auth/login', {
        login: info.login,
        password: info.password,
      });
      const token = res.data.access_token;
      console.log(token);
      return token
    } catch (err) {
      return err.response.data
    }
  };
}

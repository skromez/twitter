import axiosInstance from '../../utils/axios';

import {
  GET_USER,
  GET_USER_REQUEST,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_USER,
  SET_USER,
  SIGNUP_FAIL,
  SIGNUP_NOTIFICATION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../types';

import { getUserTweets, } from './tweetsActions';
import { toggleModal } from './uiActions';


const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signUpFail = (error) => ({
  type: SIGNUP_FAIL,
  payload: error,
});

const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signUpNotification = () => ({
  type: SIGNUP_NOTIFICATION,
});

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const resetUser = () => ({
  type: RESET_USER,
});

const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

const getUser = (userData) => ({
  type: GET_USER,
  payload: userData,
});

export const signOutUser = () => (dispatch) => {
  dispatch(resetUser());
  sessionStorage.removeItem('jwt');
  localStorage.removeItem('jwt');
};

export const getOthersData = (login) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const { data: userData } = await axiosInstance.get(`user/${login}`);
    const { data } = await axiosInstance.get(`user/${login}/tweets`);
    dispatch(getUser(userData));
    dispatch(getUserTweets(data));
  } catch (err) {
    console.log(err);
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    const { data: userData } = await axiosInstance.get('user');
    dispatch(setUser(userData));
  } catch (err) {
    console.log(err);
  }
};

export const signUpUser = (credentials) => async (dispatch, getStore) => {
  dispatch(signUpRequest());
  try {
    await axiosInstance.post('user', credentials);
    dispatch(signUpSuccess());
    setTimeout(() => {
      const { ui } = getStore();
      if (ui.modal === 'signUp') {
        dispatch(toggleModal('signUp'));
        dispatch(signUpNotification());
      }
    }, 3000);
  } catch (err) {
    dispatch(signUpFail(err.response.data.message));
  }
};

export const loginUser = (credentials, checkbox) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axiosInstance.post('auth/login', credentials);
    if (checkbox) {
      localStorage.setItem('jwt', data.access_token);
    } else sessionStorage.setItem('jwt', data.access_token);
    dispatch(getUserInfo());
    dispatch(toggleModal('login'));
    dispatch(loginSuccess());
  } catch (err) {
    dispatch(loginFail(err.response.data.message));
  }
};

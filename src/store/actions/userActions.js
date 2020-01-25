import axiosInstance from '../../utils/axios';

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_USER,
  SEND_TWEET_FAIL,
  SEND_TWEET_REQUEST,
  SEND_TWEET_SUCCESS,
  SET_USER, SET_USER_REQUEST,
  SIGNUP_FAIL,
  SIGNUP_NOTIFICATION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../types';
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

const sendTweetRequest = () => ({
  type: SEND_TWEET_REQUEST,
});

const sendTweetSuccess = (tweet) => ({
  type: SEND_TWEET_SUCCESS,
  payload: tweet,
});

const sendTweetFail = (error) => ({
  type: SEND_TWEET_FAIL,
  payload: error,
});

export const sendUserTweet = (tweet) => async (dispatch) => {
  dispatch(sendTweetRequest());
  try {
    await axiosInstance.post('/tweet', tweet);
    dispatch(sendTweetSuccess(tweet));
  } catch (err) {
    dispatch(sendTweetFail(err.response.data.message));
  }
};

export const resetUser = () => ({
  type: RESET_USER,
});

const fillUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});

export const signOutUser = () => (dispatch) => {
  dispatch(resetUser());
  sessionStorage.removeItem('jwt');
  localStorage.removeItem('jwt');
};

export const getUserInfo = () => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const { data: userData } = await axiosInstance.get('user');
    dispatch(fillUser(userData));
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
      if (ui.modal === 'signUp') dispatch(toggleModal('signUp'));
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

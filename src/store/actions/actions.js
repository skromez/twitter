import TwitterService from '../../services/TwitterService';
import {
  CLOSE_ALL_MODALS,
  OPEN_MODAL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_NOTIFICATION,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_USER,
} from '../types';

const twitterService = new TwitterService();


export const closeAllModals = () => ({
  type: CLOSE_ALL_MODALS,
});

export const openModal = (type) => ({
  type: OPEN_MODAL,
  payload: type,
});

const signUpFail = (error) => ({
  type: SIGNUP_FAIL,
  payload: error,
});

const signUpRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signUpSuccess = (info) => ({
  type: SIGNUP_SUCCESS,
  payload: info,
});
const signUpNotification = () => ({
  type: SIGNUP_NOTIFICATION,
});

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (info) => ({
  type: LOGIN_SUCCESS,
  payload: info,
});

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});


export const resetUser = () => ({
  type: RESET_USER,
});

export const createUser = (info) => async (dispatch) => {
  dispatch(signUpRequest());
  const res = await twitterService.createUser(info);
  if (res.message) {
    dispatch(signUpFail(res.message));
  } else {
    dispatch(signUpSuccess(info));
    setTimeout(() => {
      dispatch(signUpNotification());
      dispatch(closeAllModals());
    }, 1000);
  }
};


export const loginUser = (info) => async (dispatch) => {
  dispatch(loginRequest());
  const res = await twitterService.loginUser(info);
  localStorage.setItem('jwt', res);
  if (res.message) {
    dispatch(loginFail(res.message));
  } else {
    const data = await twitterService.getUserInfo();
    dispatch(loginSuccess(data));
    dispatch(closeAllModals());
  }
};

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REFRESH_SUCCESS,
  RESET_USER,
  SET_USER,
  SIGNUP_FAIL,
  SIGNUP_NOTIFICATION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS
} from '../types';

const initialState = {
  info: {},
  success: null,
  loading: null,
  signUpError: null,
  loginError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return { ...state };
    }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        success: true,
        autoClose: true,
        signUpError: null,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        success: false,
        signUpError: action.payload,
      };
    case SIGNUP_NOTIFICATION:
      return {
        ...state,
        success: false,
        signUpError: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginError: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loginError: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        info: action.payload,
      };
    case REFRESH_SUCCESS:
      return {
        ...state,
        info: action.payload,
      };
    case RESET_USER:
      return {
        ...state,
        info: {},
      };
    default:
      return state;
  }
};

export default userReducer;

import {
  RESET_USER,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_NOTIFICATION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
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
        info: action.payload,
        success: true,
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
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        info: action.payload,
        loading: false,
        loginError: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loginError: action.payload,
      };
    default:
    case RESET_USER:
      return state;
  }
};

export default userReducer;

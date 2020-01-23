import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_USER,
  SET_USER,
  SIGNUP_FAIL,
  SIGNUP_NOTIFICATION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SEND_TWEET_FAIL,
  SEND_TWEET_SUCCESS,
  SEND_TWEET_REQUEST,
} from '../types';

const initialState = {
  info: {
    createdAt: null,
    id: null,
    firstName: null,
    lastName: null,
    avatar: null,
    cover: null,
    login: null,
    location: null,
    tweets: 0,
  },
  success: null,
  loading: null,
  signUpError: null,
  loginError: null,
  tweetError: null,
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
    case SEND_TWEET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEND_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SEND_TWEET_FAIL:
      return {
        ...state,
        tweetError: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        info: action.payload,
      };
    case RESET_USER:
      return {
        ...state,
        info: {
          ...state.info,
          ...initialState.info,
        },
      };
    default:
      return state;
  }
};

export default userReducer;

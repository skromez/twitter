import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESET_USER,
  SEND_TWEET_FAIL,
  SEND_TWEET_REQUEST,
  SEND_TWEET_SUCCESS,
  SET_USER_REQUEST,
  SET_USER,
  SIGNUP_FAIL,
  SIGNUP_NOTIFICATION,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
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
  dataLoading: null,
  signUpError: null,
  loginError: null,
  tweetError: null,
  posts: [
    {
      id: 6,
      name: 'Dmitry Novikov',
      login: 'skromez',
      date: '24 Jan',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis cumque error facilis fuga illo inventore iure nulla obcaecati omnis perferendis perspiciatis quam quod, reiciendis, saepe suscipit vel voluptates!',
    },
  ],
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
        info: {
          ...state.info,
          tweets: state.info.tweets + 1,
        },
        posts: [
          action.payload,
          ...state.posts,
        ],
      };
    case SEND_TWEET_FAIL:
      return {
        ...state,
        tweetError: action.payload,
      };
    case SET_USER_REQUEST:
      return {
        ...state,
        dataLoading: true,
      }
    case SET_USER:
      return {
        ...state,
        dataLoading: false,
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

import {
  ADD_DETAILED_TWEET,
  GET_USER_TWEETS,
  RESET_DETAILED_TWEET,
  SEND_TWEET_FAIL,
  SEND_TWEET_REQUEST,
  SEND_TWEET_SUCCESS,
  TOGGLE_EDIT_TWEET,
  UPDATE_SEARCH,
  UPDATE_TWEETS
} from '../types';

const initialState = {
  editTweet: false,
  detailedTweet: {
    deletedAt: null,
    hashtags: [],
    _id: null,
    user: null,
    message: null,
    createdAt: null,
    updatedAt: null,
    author: null,
    likes: [],
  },
  tweets: {
    total: 0,
    page: 0,
    items: [],
  },
};


const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TWEET_REQUEST:
      return {
        ...state,
      };
    case SEND_TWEET_SUCCESS:
      return {
        ...state,
        tweets: {
          ...state.tweets,
          items: [
            ...state.tweets.items,
            action.payload,
          ],
        },
      };
    case SEND_TWEET_FAIL:
      return {
        ...state,
        tweetError: action.payload,
      };
    case GET_USER_TWEETS:
      return {
        ...state,
        tweets: action.payload,
      };
    case UPDATE_TWEETS:
      return {
        ...state,
        tweets: {
          ...state.tweets,
          items: [
            ...action.payload,
          ],
        },
      };
    case TOGGLE_EDIT_TWEET:
      return {
        ...state,
        editTweet: state.editTweet === action.payload ? null : action.payload,
      };
    case ADD_DETAILED_TWEET:
      return {
        ...state,
        detailedTweet: {
          ...state.detailedTweet,
          ...action.payload,
        },
      };
    case RESET_DETAILED_TWEET:
      return {
        ...state,
        detailedTweet: state.detailedTweet,
      };
    default:
      return state;
  }
};

export default tweetsReducer;

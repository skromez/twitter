import {
  SEND_TWEET_FAIL,
  SEND_TWEET_REQUEST,
  SEND_TWEET_SUCCESS,
  GET_USER_TWEETS,
  UPDATE_TWEETS,
  TOGGLE_EDIT_TWEET,
  TOGGLE_TWEET_MODAL,
  LIKE_TWEET,
  UNLIKE_TWEET
} from '../types';

const initialState = {
  editTweet: false,
  toggleTweetModal: null,
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
          total: state.tweets.total + 1,
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
          total: state.tweets.items.length > action.payload.length ? state.tweets.total - 1 : state.tweets.total,
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
    case LIKE_TWEET:
      return {
        ...state,
        tweets: {
          ...state.tweets,
          items: [...state.tweets.items.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                likes: item.likes + 1,
              };
            }
            return item;
          })],
        },
      };
    case UNLIKE_TWEET:
      return {
        ...state,
        tweets: {
          ...state.tweets,
          items: [...state.tweets.items.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                likes: item.likes - 1,
              };
            }
            return item;
          })],
        },
      }
    case TOGGLE_TWEET_MODAL:
      return {
        ...state,
        toggleTweetModal: state.toggleTweetModal === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
};

export default tweetsReducer;

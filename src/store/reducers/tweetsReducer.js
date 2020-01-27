import { SEND_TWEET_FAIL, SEND_TWEET_REQUEST, SEND_TWEET_SUCCESS, GET_USER_TWEETS } from '../types';

const initialState = {
  changeTweet: false,
  deteleTweet: false,
  liked: false,
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
    default:
      return state;
  }
};

export default tweetsReducer;

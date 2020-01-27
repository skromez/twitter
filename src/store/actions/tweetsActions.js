import { GET_USER_TWEETS, SEND_TWEET_FAIL, SEND_TWEET_REQUEST, SEND_TWEET_SUCCESS } from '../types';
import axiosInstance from '../../utils/axios';

export const getUserTweets = (tweets) => ({
  type: GET_USER_TWEETS,
  payload: tweets,
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
    sendTweetFail(err.response.data.message);
    console.log(err);
  }
};

export const changeUserTweet = (tweet) => async (dispatch, getStore) => {
  try {
    const { tweets } = getStore();
    console.log(tweets);
    await axiosInstance.patch(`/tweet/${'asd'}`);
  } catch (err) {
    console.log(err);
  }
};

import {
  GET_USER_TWEETS,
  SEND_TWEET_FAIL,
  SEND_TWEET_REQUEST,
  SEND_TWEET_SUCCESS,
  UPDATE_TWEETS,
  TOGGLE_EDIT_TWEET,
} from '../types';
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

const updateTweets = (array) => ({
  type: UPDATE_TWEETS,
  payload: array,
});

export const toggleEditTweet = (id) => ({
  type: TOGGLE_EDIT_TWEET,
  payload: id,
});

const deleteTweet = (id) => async () => {
  try {
    await axiosInstance.delete(`/tweet/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const changeTweet = (id, info) => async () => {
  try {
    await axiosInstance.patch(`/tweet/${id}`, info);
  } catch (err) {
    console.log(err);
  }
};

export const sendUserTweet = (tweet) => async (dispatch) => {
  dispatch(sendTweetRequest());
  try {
    const { data } = await axiosInstance.post('/tweet', tweet);
    dispatch(sendTweetSuccess(data));
  } catch (err) {
    sendTweetFail(err.response.data.message);
    console.log(err);
  }
};

export const changeUserTweet = (id, { message, hashtags }) => async (dispatch, getStore) => {
  try {
    const { tweets: { tweets: { items } } } = getStore();
    const idx = items.reverse().findIndex((item) => item.id === id);
    const oldItem = items[idx];
    const newItem = { ...oldItem, message, hashtags };
    const newArray = [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];
    dispatch(updateTweets(newArray));
    dispatch(changeTweet(id, { message, hashtags }));
    dispatch(toggleEditTweet(id));
  } catch (err) {
    console.log(err);
  }
};

export const deleteUserTweet = (id) => async (dispatch, getStore) => {
  try {
    const { tweets: { tweets: { items } } } = getStore();
    const idx = items.findIndex((item) => item.id === id);
    const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
    dispatch(updateTweets(newArray));
    dispatch(deleteTweet(id));
  } catch (err) {
    console.log(err);
  }
};

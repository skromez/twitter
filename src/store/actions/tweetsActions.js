import {
  GET_USER_TWEETS,
  SEND_TWEET_FAIL,
  SEND_TWEET_REQUEST,
  SEND_TWEET_SUCCESS,
  TOGGLE_EDIT_TWEET,
  UPDATE_TWEETS,
  ADD_DETAILED_TWEET, RESET_DETAILED_TWEET,
} from '../types';
import { toggleModal } from './uiActions';
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

const handleTweetLike = (data, getState, dispatch) => {
  const { tweets: { tweets: { items } } } = getState();

  const copiedTweets = JSON.parse(JSON.stringify(items));
  const tweetIndex = copiedTweets.findIndex((tweet) => tweet.id === data.id);
  copiedTweets[tweetIndex] = data;
  dispatch(updateTweets(copiedTweets));
};

const clickLikeTweet = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axiosInstance.post(`tweet/${id}/like`);
    handleTweetLike(data, getState, dispatch);
  } catch (err) {
    if (err.response.data.statusCode === 409) {
      const { data } = await axiosInstance.delete(`tweet/${id}/like`);
      handleTweetLike(data, getState, dispatch);
    }
    console.log(err);
  }
};

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

export const deleteUserTweet = (id) => (dispatch, getStore) => {
  const { tweets: { tweets: { items } } } = getStore();
  const idx = items.findIndex((item) => item.id === id);
  const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
  dispatch(updateTweets(newArray));
  dispatch(deleteTweet(id));
};

export const addDetailedTweet = (tweet) => ({ type: ADD_DETAILED_TWEET, payload: tweet });
export const resetDetailedTweet = () => ({ type: RESET_DETAILED_TWEET });

export const tweetModal = (id) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(`/tweet/${id}`);
    dispatch(addDetailedTweet(data));
    dispatch(toggleModal('tweet'));
  } catch (err) {
    // dispatch(toggleTweetModal());
  }
};

export const likeUserTweet = (id) => (dispatch) => {
  dispatch(clickLikeTweet(id));
};

export const likeDetailedTweet = (id) => async (dispatch, getState) => {
  try {
    const { data: updatedTweet } = await axiosInstance.post(`tweet/${id}/like`);
    const { data } = await axiosInstance.get(`/tweet/${id}`);
    dispatch(addDetailedTweet(data));
    handleTweetLike(updatedTweet, getState, dispatch);
  } catch (err) {
    if (err.response.data.statusCode === 409) {
      const { data: updatedTweet } = await axiosInstance.delete(`tweet/${id}/like`);
      const { data } = await axiosInstance.get(`/tweet/${id}`);
      dispatch(addDetailedTweet(data));
      handleTweetLike(updatedTweet, getState, dispatch);
    }
    console.log(err);
  }
};

import axiosInstance from '../../utils/axios';
import { SUBMIT_SEARCH_REQUEST, SUBMIT_SEARCH_SUCCESS, UPDATE_SEARCH } from '../types';

export const updateSearch = (info) => ({
  type: UPDATE_SEARCH,
  payload: info,
});

const submitSearchRequest = () => ({ type: SUBMIT_SEARCH_REQUEST });

const submitSearchSuccess = (term) => ({ type: SUBMIT_SEARCH_SUCCESS, payload: term });

export const searchTweetsByHashtag = (term) => async (dispatch) => {
  dispatch(submitSearchRequest());
  try {
    const { data } = await axiosInstance.get(`/tweet?term=${term}`);
    console.log(data);
    dispatch(updateSearch(data));
    dispatch(submitSearchSuccess(term));
  } catch (err) {
    console.log(err);
  }
};

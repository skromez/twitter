import queryString from 'query-string';
import axiosInstance from '../../utils/axios';
import { CHANGE_OFFSET, SUBMIT_SEARCH_REQUEST, SUBMIT_SEARCH_SUCCESS, UPDATE_SEARCH } from '../types';
import history from '../../utils/history';

export const updateSearch = (info) => ({
  type: UPDATE_SEARCH,
  payload: info,
});

const submitSearchRequest = () => ({ type: SUBMIT_SEARCH_REQUEST });

const submitSearchSuccess = (query) => ({ type: SUBMIT_SEARCH_SUCCESS, payload: query });

export const changeOffset = (offset) => ({ type: CHANGE_OFFSET, payload: offset });

export const onChangePage = (page) => async (dispatch, getStore) => {
  dispatch(submitSearchRequest());
  try {
    const newOffset = 5 * page;
    dispatch(changeOffset(newOffset));
    const { search } = getStore();
    const newQuery = queryString.stringify(search.query);
    const { data } = await axiosInstance.get(`/tweet?${newQuery}`);
    const parsed = queryString.parse(newQuery);
    history.push(`/search?${newQuery}`);
    dispatch(updateSearch(data));
    dispatch(submitSearchSuccess(parsed));
  } catch (err) {
    console.log(err);
  }

};


export const searchTweetsByHashtag = (query) => async (dispatch) => {
  dispatch(submitSearchRequest());
  try {
    const { data } = await axiosInstance.get(`/tweet${query}`);
    const parsed = queryString.parse(query);
    dispatch(updateSearch(data));
    dispatch(submitSearchSuccess(parsed));
  } catch (err) {
    console.log(err);
  }
};

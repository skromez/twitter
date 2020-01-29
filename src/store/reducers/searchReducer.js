import { SUBMIT_SEARCH_REQUEST, SUBMIT_SEARCH_SUCCESS, UPDATE_SEARCH } from '../types';

const initialState = {
  loading: null,
  value: null,
  tweets: {
    total: 0,
    page: 0,
    items: [],
  },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUBMIT_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        value: action.payload,
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        tweets: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default searchReducer;

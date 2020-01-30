import { SUBMIT_SEARCH_REQUEST, SUBMIT_SEARCH_SUCCESS, UPDATE_SEARCH, CHANGE_OFFSET } from '../types';

const initialState = {
  loading: null,
  query: {
    term: null,
    offset: null,
  },
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
        query: {
          ...action.payload,
        },
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        tweets: {
          ...action.payload,
        },
      };
    case CHANGE_OFFSET:
      return {
        ...state,
        query: {
          ...state.query,
          offset: action.payload,
        },
      };
    default:
      return state;
  }
};

export default searchReducer;

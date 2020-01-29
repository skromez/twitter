import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import userReducer from './userReducer';
import tweetsReducer from './tweetsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  tweets: tweetsReducer,
  search: searchReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import userReducer from './userReducer';
import tweetsReducer from './tweetsReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  tweets: tweetsReducer,
});

export default rootReducer;

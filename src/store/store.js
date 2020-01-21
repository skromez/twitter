import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
})

export default store;

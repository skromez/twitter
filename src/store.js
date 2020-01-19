import { createStore } from 'redux';
import modalReducer from './reducers/modalReducer';

const store = createStore(
  modalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;

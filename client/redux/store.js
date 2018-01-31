import { createStore } from 'redux';
import rootReducer from './reducers/index';
const state = {
  test: 0,
  test2: 'hello world'
};


export default createStore(rootReducer, state);
import { createStore } from 'redux';
import rootReducer from './reducers/index';
const state = {
  username: '',
  password: '',
  email: ''
};


export default createStore(rootReducer, { state });
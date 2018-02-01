import { createStore } from 'redux';
import rootReducer from './reducers/index';
const state = {
  username: '',
  password: '',
  email: '',
  shortid: '',
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  city: '',
  zip: ''
};


export default createStore(rootReducer, { state });
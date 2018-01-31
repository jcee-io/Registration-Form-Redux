import { combineReducers } from 'redux';

const reducers = (state = {}, action) => {
	let object = Object.assign({}, state);

  switch(action.type) {
  	case 'GET_USERNAME':
  	  object.username = action.username;
  	  return object;
  	case 'GET_PASSWORD':
  	  object.password = action.password;
  	  return object;
  	case 'GET_EMAIL':
  	  object.email = action.email;
  	  return object;
  	default:
  	  return state;
  }
};


export default combineReducers({ state: reducers });
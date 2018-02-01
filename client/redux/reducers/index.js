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
  	case 'GET_SHORTID':
  	  object.shortid = action.shortid;
  	  return object;
  	case 'GET_FIRST_NAME':
  	  object.firstName = action.firstName;
  	  return object;
  	case 'GET_LAST_NAME':
  	  object.lastName = action.lastName;
  	  return object;
  	case 'GET_PHONE':
  	  object.phone = action.phone;
  	case 'GET_ADDRESS':
  	  object.address = action.address;
  	  return object;
  	case 'GET_CITY':
  	  object.city = action.city;
  	  return object;
  	case 'GET_ZIP':
  	  object.zip = action.zip;
  	  return object;
  	default:
  	  return state;
  }
};


export default combineReducers({ state: reducers });
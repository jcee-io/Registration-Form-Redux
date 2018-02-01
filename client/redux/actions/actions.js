export const testEvent = event => ({
  type: 'TEST',
  event
});

export const saveUsername = username => ({
  type: 'GET_USERNAME',
  username
});

export const savePassword = password => ({
  type: 'GET_PASSWORD',
  password
});

export const saveEmail = email => ({
  type: 'GET_EMAIL',
  email
});

export const saveShortid = shortid => ({
  type: 'GET_SHORTID',
  shortid
});

export const saveLastName = lastName => ({
	type: 'GET_LAST_NAME',
	lastName
});

export const saveFirstName = firstName => ({
	type: 'GET_FIRST_NAME',
	firstName
});

export const savePhone = phone => ({
	type: 'GET_PHONE',
	phone
});

export const saveAddress = address => ({
	type: 'GET_ADDRESS',
	address
});

export const saveCity = city => ({
	type: 'GET_CITY',
	city
});

export const saveState = state => ({
	type: 'GET_STATE',
	state
});
export const saveZip = zip => ({
	type: 'GET_ZIP',
	zip
});
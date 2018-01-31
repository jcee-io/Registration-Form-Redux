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
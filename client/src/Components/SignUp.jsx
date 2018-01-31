import React from 'react';

const SignUp = ({
  saveUsername,
  savePassword,
  saveEmail,
  saveForm1,
  username,
  password,
  email
}) => (
	<div className="form">
	  <div>
	    <h2>Form 1</h2>
		  Username: <br /><input type="text" onChange={({ target }) => saveUsername(target.value)} /><br />
		  Password: <br /><input type="password" onChange={({ target }) => savePassword(target.value)} /><br />
		  Email: <br /><input type="text" onChange={({ target }) => saveEmail(target.value)} /><br />
		  <button className="btn btn-default" onClick={saveForm1}>Save</button>
	  </div>
	</div>
);


export default SignUp;
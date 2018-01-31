import React from 'react';

const SignUp = props => (
	<div className="form">
	  <div>
	    <h2>Form 1</h2>
		  Username: <br /><input type="text" onChange={({ target }) => props.saveUsername(target.value)} /><br />
		  Password: <br /><input type="password" onChange={({ target }) => props.savePassword(target.value)} /><br />
		  Email: <br /><input type="text" onChange={({ target }) => props.saveEmail(target.value)} /><br />
		  <button className="btn btn-default">Save</button>
	  </div>
	</div>
);


export default SignUp;
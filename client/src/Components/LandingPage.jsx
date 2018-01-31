import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return (
  	<div id="landing">
  	  <div id="landing-buttons">
  	    <Link className="btn btn-default" to="/signup">Sign Up</Link>
  	    <Link className="btn btn-default" to="/login">Login</Link>
  	  </div>
  	</div>
  );
};


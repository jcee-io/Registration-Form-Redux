import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
const Form1 = ({
  saveUsername,
  savePassword,
  saveEmail,
  nextForm
}) => (
	  <div>
	    <h2>Form 1</h2>
		  Username: <br /><input type="text" onChange={({ target }) => saveUsername(target.value)} /><br />
		  Password: <br /><input type="password" onChange={({ target }) => savePassword(target.value)} /><br />
		  Email: <br /><input type="text" onChange={({ target }) => saveEmail(target.value)} /><br />
		  <button className="btn btn-default" onClick={() => nextForm()}>Save</button>
	  </div>
);

const Form2 = ({
	saveFirstName,
	saveLastName,
	savePhone,
	nextNextForm
}) => (
	  <div>
	    <h2>Form 2</h2>
		  First Name: <br /><input type="text" onChange={({ target }) => saveFirstName(target.value)} /><br />
		  Last Name: <br /><input type="text" onChange={({ target }) => saveLastName(target.value)} /><br />
		  Telephone Number: <br /><input type="text" onChange={({ target }) => savePhone(target.value)}  /><br />
		  <button className="btn btn-default" onClick={() => nextNextForm()}>Save</button>
	  </div>
);

const Form3 = ({
	saveAddress,
	saveCity,
	saveZip,
	endForm
}) => (
	  <div>
	    <h2>Form 3</h2>
		  Street Address: <br /><input type="text" onChange={({ target }) => saveAddress(target.value)} /><br />
		  City: <br /><input type="text" onChange={({ target }) => saveCity(target.value)} /><br />
		  Zip: <br /><input type="text" onChange={({ target }) => saveZip(target.value)} /><br />
		  <button className="btn btn-default" onClick={() => endForm()}>Save</button>
	  </div>
);

const Form = props => {
	if(!props.form1Complete) {
		return <Form1 {...props} />;
	} else if (!props.form2Complete) {
		return <Form2 {...props} />
	} else if (!props.form3Complete) {
		return <Form3 {...props} />
	} else {
		return <Redirect to="/" />
	}
};
class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form1Complete: false,
			form2Complete: false,
			form3Complete: false
		};
	}

	nextForm() {
		this.props.saveForm1();
		this.setState({ form1Complete: true });
	}

	nextNextForm() {
		this.props.saveForm2();
		this.setState({ form2Complete: true });
	}

	endForm() {
		this.setState({ form3Complete: true });
	}
	render() {
		return (
			<div className="form">
				<Form 
				nextForm={this.nextForm.bind(this)}
				nextNextForm={this.nextNextForm.bind(this)}
				endForm={this.endForm.bind(this)}
				{...this.state}
				{...this.props}
				/>
			</div>
		);
	}
}

export default SignUp;
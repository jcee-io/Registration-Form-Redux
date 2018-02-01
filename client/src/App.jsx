import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import shortid from 'shortid';
import * as actions from '../redux/actions/actions';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

class App extends Component {
	constructor(props)  {
		super(props);
	}
  
  saveForm1() {
  	const { username, password, email, saveShortid } = this.props;
  	const id = this.props.shortid !== '' ? this.props.shortid : shortid.generate();
  	saveShortid(id);
 		axios.post('/register', { username, email, password, shortid: id });

 		return '/';
  }

  saveForm2() {
  	const { firstName, lastName, phone} = this.props;
  	const id = this.props.shortid;
  	axios.post('/register/form2', {firstName, lastName, phone, shortid: id});
  }

  saveform3() {
  	const { address, city, zip, state } = this.props;
  	const id = this.props.shortid;
  	axios.post('/register/form3', { address, city, zip, state, shortid: id});
  }

	render() {
		return (
		  <div>
		    <Switch>
			    <Route exact path="/" render={() => <LandingPage {...this.props} />} />
			    <Route exact path="/signup" render={() => <SignUp
			    	 saveForm1={this.saveForm1.bind(this)} {...this.props} 
			    	 saveForm2={this.saveForm2.bind(this)}
			    	 saveForm3={this.saveform3.bind(this)}
			    />} />
		    </Switch>
		  </div>
		);
	}
}

const mapStateToProps = ({ state }) => ({...state});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
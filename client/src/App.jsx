import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as actions from '../redux/actions/actions';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

class App extends Component {
	constructor(props)  {
		super(props);
	}
  
  saveForm1() {
  	const { username, password, email } = this.props;

 		axios.post('/register', { username, email, password });
  }

	render() {
		return (
		  <div>
		    <Switch>
			    <Route exact path="/" render={() => <LandingPage {...this.props} />} />
			    <Route exact path="/signup" render={() => <SignUp saveForm1={this.saveForm1.bind(this)} {...this.props} />} />
			    <Route exact path="/login" render={() => <Login {...this.props} />} />
		    </Switch>
		  </div>
		);
	}
}

const mapStateToProps = ({ state }) => ({...state});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
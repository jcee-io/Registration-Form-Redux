import React, { Component } from 'react';
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

	render() {
		return (
		  <div>
		    <Switch>
			    <Route exact path="/" render={() => <LandingPage {...this.props} />} />
			    <Route exact path="/signup" render={() => <SignUp {...this.props} />} />
			    <Route exact path="/login" render={() => <Login {...this.props} />} />
		    </Switch>
		  </div>
		);
	}
}

const mapStateToProps = ({ state }) => ({...state});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
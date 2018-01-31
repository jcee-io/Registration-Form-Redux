import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/actions';

class App extends Component {
	render() {
		return (
		  <div>
		    <h1>hello world</h1>
		  </div>
		);
	}
}

const mapStateToProps = (state) => {
  console.log(state);
	return ({...state});
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
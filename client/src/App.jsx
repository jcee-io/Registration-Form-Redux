import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/actions';

class App extends Component {
	constructor(props)  {
		super();
		this.endpoint = props.match.params.filter;

		console.log(this.endpoint);
	}

	render() {
		return (
		  <div>
		    <h1>hello {this.endpoint || '/'}</h1>
		  </div>
		);
	}
}

const mapStateToProps = ({ state }) => {
  console.log(state);
	return ({...state});
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
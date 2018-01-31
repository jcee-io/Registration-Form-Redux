import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	<Provider store={store}>
  	  <Router>
   	    <Route path="/:filter" component={App} />
   	  </Router>
    </Provider>
    ,document.getElementById('app')
  );
});
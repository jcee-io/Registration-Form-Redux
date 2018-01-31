import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	<Provider>
   	  <App/>
    </Provider>
    ,document.getElementById('app')
  );
});
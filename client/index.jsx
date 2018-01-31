import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

import { Provider } from 'react-redux';
import store from './redux/store';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	<Provider store={store}>
   	  <App/>
    </Provider>
    ,document.getElementById('app')
  );
});
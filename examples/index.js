import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './common/App';
import './static/css/reset.less';

ReactDOM.render(
	<BrowserRouter>
    	<App />
  	</BrowserRouter>,
	document.getElementById('app')
)
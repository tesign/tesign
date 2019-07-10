import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from '_/common/App';
import Router from './router/router'
import '_/common/reset.scss';
import 'github-markdown-css'
ReactDOM.render(
	<HashRouter>
    	<App Router = {Router}/>
  	</HashRouter>,
	document.getElementById('app')
)
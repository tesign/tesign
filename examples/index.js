import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@/index';
ReactDOM.render(
	<Button type='normal' onClick = {(e)=>{alert(1)}}>
		66		
	</Button>,
	document.getElementById('app')
)
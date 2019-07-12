import React from 'react';
import './index.scss';
import classnames from 'classnames';
function Col(props){
	let {span,children,className} = props;
	let col_className = classnames('tes-col','tes-col-' + span,className);
	return(
		<div className = {col_className}>{children}</div>
	)
}

function Row(props){
	let row_classname;
	let {children,className} = props;
	let row_className = classnames('tes-row',className);
	return (
		<div className={row_className}>{children}</div>
	)
}

export { Col,Row }
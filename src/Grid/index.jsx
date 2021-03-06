import React from 'react';
import './index.scss';
import classnames from 'classnames';
function Col(props){
	let {span,children,className,style,offset} = props;
	let col_className = classnames({
		'tes-col':true,
		[`tes-col-${span}`]:span,
		[`tes-col-offset-${offset}`]:offset,
		[`${className}`]:className
	})
	return(
		<div className = {col_className} style = {style}>{children}</div>
	)
}

function Row(props){
	let {children,className,gutter,type,align,justify,direction,wrap} = props;

	let row_className = classnames({
		'tes-row':true,
		'tes-row-flex':align || justify,
		[`tes-row-flex-${direction}`]:direction,
		[`tes-row-flex-${justify}`]:justify,
		[`tes-row-flex-${align}`]:align,
		[`${className}`]:className,
	});
	let row_style;

	if(gutter){
		let row_margin = -gutter/2;
		let row_style = {marginLeft:row_margin + 'px',marginRight:row_margin + 'px'};
		let cloneStyle = {paddingLeft:-row_margin + 'px',paddingRight:-row_margin + 'px'};
		let cloneChildren = [];
		children.map((item,index)=>{
			cloneChildren.push(React.cloneElement(item,{style:cloneStyle,key:index}))
		})
		return(
			<div className={row_className} style = {row_style}>{cloneChildren}</div>
		)
	}//间隔存在的时候开启复制并且修改style
	return (
		<div className={row_className} style = {row_style}>{children}</div>
	)
}

export { Col,Row }
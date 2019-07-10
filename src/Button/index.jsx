//这个是基本的按钮组件	
import React from 'react';	
import './index.scss';	
import classnames from 'classnames';	
class Button extends React.Component{	
	constructor(props){	
  		super(props);	
		this.onClick = this.onClick.bind(this);	
	}	
	render(){	
		const btn_type ={
			primary:'tes-btn-primary',
			default:'',
			danger:'tes-btn-danger',
		}
		const btn_size = {	
			small:'tes-btn-samll',
			normal:'tes-btn-normal',	
			large:'tes-btn-large',
		}	
		const {type,size,disabled,block,href,className,style,children} = this.props;
		const btn_show = disabled?'tes-btn-disabled':''	
		const btn_block = block?'tes-btn-block':''
		const btn_class = classnames('tes-btn',btn_size[size],btn_type[type],btn_show,btn_block,className)	
		return(
			href?
			<a href={href} className = {btn_class} style = {style} onClick = {this.onClick}>{children}</a>
			:<button className = {btn_class} style = {style} onClick = {this.onClick}>{children}</button>	
		)	
	}	
	onClick(e){
		e.stopPropagation();	
		const {onClick} = this.props;	
		if(onClick && !this.props.disabled){onClick()}	
	}	
}	

Button.defaultProps = {
	size:'normal',
	type:'default',
	disabled:false,
	block:false,
}
 export { Button } 

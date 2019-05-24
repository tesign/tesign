//这个是基本的按钮组件
import React from 'react';
import './button.less';
import classnames from 'classnames';
class Button extends React.Component{
	constructor(props){
  		super(props);
		this.onClick = this.onClick.bind(this);
	}
	render(){
		const btn_type = {
			default:'',
			normal:'bu-normal',
			inner:'bu-inner'
		}
		const {type,className,style,children} = this.props;
		const btn_class = classnames('mybutton',btn_type[type],className)
		return(
			<button className = {btn_class} style = {style} onClick = {this.onClick}>{children}</button>
		)
	}
	onClick(e){
		e.stopPropagation();
		const {onClick} = this.props;
		if(onClick){onClick()}
	}
}

export { Button }
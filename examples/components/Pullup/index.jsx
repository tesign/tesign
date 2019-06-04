//这个是基本的按钮组件
import React from 'react';
import {Pullup} from '@/Pullup'
class MyPullup extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		return(
			<Pullup/>
		)
	}

}

export default MyPullup
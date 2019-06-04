//这个是基本的按钮组件
import React from 'react';
import {Button} from '@/Button'
class MyButton extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		return(
			<Button type='normal'>如果你看见我 说明你引用成功了，可以愉快的写数据测试了</Button>
		)
	}

}

export default MyButton
//这个是基本的按钮组件
import React from 'react';
import { Button } from 'antd';
import './index.scss';
import * as T from '@/Button'
class MyButton extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		return(	
			<div>
			<Button  size='small' block>如果你看见我 说明你引用成功了，可以愉快的写数据测试了</Button>
				<div className="test">
					<T.Button href='www.baidu.com' size='normal' block>123</T.Button>
					<T.Button href='www.baidu.com' size='normal' block>123</T.Button>
				</div>
			</div>
		)
	}

}

export default MyButton
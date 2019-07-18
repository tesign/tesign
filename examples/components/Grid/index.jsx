//这个是基本的按钮组件
import React from 'react';
import { Row, Col } from 'antd';
import * as T from '@/Grid'
class Grid extends React.Component{
	constructor(props){
  		super(props);
	}
	render(){
		return(
			<div>
				<Row type='flex' justify="space-between" align="bottom" gutter={8}>
				  <Col span={8}>123</Col>
				  <Col span={8}>456</Col>
				  <Col span={8}><div>我的字体很大很大很大</div></Col>
				</Row>
			    <T.Row gutter= {12} justify="space-between" align="bottom">
			    	<T.Col span = {12}>666</T.Col>
			    	<T.Col span = {0}>123</T.Col>
			    	<T.Col span = {8}><div>我的字体很大很大很大</div></T.Col>
			    </T.Row>

			</div>
		)
	}

}

export default Grid
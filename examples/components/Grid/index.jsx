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
				<Row gutter={8}>
				  <Col span={8}>123</Col>
				  <Col span={8}>456</Col>
				  <Col span={8}>789</Col>
				</Row>
			    <T.Row>
			    	<T.Col span = {12}>666</T.Col>
			    	<T.Col span = {4}>123</T.Col>
			    	<T.Col span = {8}>right</T.Col>
			    </T.Row>

			</div>
		)
	}

}

export default Grid
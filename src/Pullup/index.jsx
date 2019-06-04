import React from 'react';
import {Button} from '@/Button'
import './index.scss'
class Pullup extends React.Component{
	constructor(props){
  		super(props);
  		this.state = {
			hasClicked:false,
			pullupClass:'pullup'
  		}
		this.show = this.show.bind(this);
		this.close = this.close.bind(this);
		
	}
	show(){
		this.setState({
			hasClicked:true,
			pullupClass:'pullup actived'
		})
	}
	close(){
		this.setState({
			pullupClass:'pullup'
		})
		setTimeout(()=>{
			this.setState({
				hasClicked:false,
			})
		},300);
	}
	render(){
		return(
			<div className="wrapper">
				<Button type='normal' onClick = {this.show}>点我出奇迹</Button>
				{
					this.state.hasClicked?
					<div>
						<div className="mask" onClick = {this.close}></div>
						<div className={this.state.pullupClass}>
							这里面是测试内容
						</div>						
					</div>
					:''
				}
			</div>
		)
	}
}

export { Pullup }
/**
 * @file 
 *
 * @author yupeng
 * @created: 2019/05/25
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {ROUTERS} from './router.conf';
import Loadable from 'react-loadable';
import Loading from './loading.jsx';
import Button from 'Doc/Button.md'
export default class Router extends React.Component {
    constructor(props){
        super(props);
    }
 
    renderRouter(){
        return (
            <Switch>
                {
                    ROUTERS.map((item)=>{
                        return <Route exact={item.link=='/'} path={item.link} 
                                component = {item.road?Loadable({
                                    loader:()=>import(`${item.road}`),
                                    loading:Loading
                                }):''}/>
                    })
                }    
            </Switch>
        )
    }
    render() {
        return (
            <div className="tesign-router">
                {
                    this.renderRouter()
                }
            </div>
        )
    }
}
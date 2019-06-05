/**
 * @file 
 *
 * @author yupeng
 * @created: 2019/05/25
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {ROUTERS} from '_/common/router.conf'
import Loadable from 'react-loadable';
import Loading from '_/common/loading.jsx';
// const ROUTERS = require('../../common/router.conf');
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
                                    loader:()=>import('Doc/docs/' + item.road),
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
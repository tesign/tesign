/**
 * @file 首页
 *
 * @author yupeng
 * @created: 2019/05/25
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import Router from './router';
import {ROUTERS} from './router.conf';
import './App.less';


export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="tesign-app">
                <nav className="tesign-nav">
                    <h3>Tesign</h3>
                    <ul>
                        {
                            ROUTERS.map(link => {
                                return (<li><NavLink activeClassName='is-active' to={link.link}>{link.name}</NavLink></li>)
                            })
                        }
                    </ul>
                </nav>
                <Router className="tesign-router"></Router>
            </div>
        )
    }
}
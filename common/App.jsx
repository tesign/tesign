/**
 * @file 首页
 *
 * @author yupeng
 * @created: 2019/05/25
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import {ROUTERS} from './router.conf'
import './reset.scss'
import './App.scss';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {Router} = this.props
        return (
            <div className="tesign-app markdown-body">
                <nav className="tesign-nav">
                    <h3>Tesign</h3>
                    <ul>
                        {
                            ROUTERS.map(link => {
                                return (<li key = {link.link} ><NavLink activeClassName='is-active' to={link.link}>{link.name}</NavLink></li>)
                            })
                        }
                    </ul>
                </nav>
                <Router className="tesign-router"></Router>
            </div>
        )
    }
}
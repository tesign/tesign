/**
 * @file 
 *
 * @author yupeng
 * @created: 2019/05/25
 */


import React from 'react';
import { Link } from 'react-router-dom';
import Router from './router';
import {ROUTERS} from './router.conf';

let linksHtml = []
ROUTERS.map(link => {
    linksHtml.push(`<li><Link to=${link.link}>${link.name}</Link></li>`);
});

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
                                return (<li><Link to={link.link}>{link.name}</Link></li>)
                            })
                        }
                    </ul>
                </nav>
                <Router className="tesign-router"></Router>
            </div>
        )
    }
}
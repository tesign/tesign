/**
 * @file 
 *
 * @author yupeng
 * @created: 2019/05/25
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Button from './components/Button';

// import Button from '../doc/Button.md';

export default class Router extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="tesign-router">
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/Button' component={Button}/>
                </Switch>
            </div>
        )
    }
}
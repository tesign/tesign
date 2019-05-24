/**
 * @file Button.jsx
 *
 * @author yupeng
 * @created: 2019/05/25
 */

import React from 'react';
import { Button } from '@/index';

export default class TButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Button type='normal' onClick = {(e)=>{alert(1)}}>test</Button>
            </div>
        )
    }
}
/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {RedirectTo} from 'components';

export default class extends Component {

    render() {
        return (
            <Switch>
                <Route path="/app" component={require('./app')}/>
                <Route path="/login" component={require('lazy|./login')}/>
                <Route component={() => {
                    return <RedirectTo to='/app'/>;
                }}/>
            </Switch>
        )
    }
}

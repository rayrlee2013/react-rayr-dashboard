/**
 * Created by Rayr Lee on 2018/11/2.
 */
import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

export default class extends Component {
    render() {
        return (
            <Switch>
                <Route path="/app" component={require('./app')}/>
                <Route path="/login" component={require('./login')}/>
                <Route component={() => (
                    <Redirect push to="/app"/>
                )}/>
            </Switch>
        )
    }
}

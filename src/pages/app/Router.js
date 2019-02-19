/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

export default class extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <Switch>
                <Route path={`${match.url}/dashboard`} component={require('lazy|./pages/dashboard')}/>
                <Route path={`${match.url}/widgets`} component={require('lazy|./pages/widgets')}/>
                <Route path={`${match.url}/profile`} component={require('lazy|./pages/profile')}/>
                <Route component={() => (
                    <Redirect push to="/app/dashboard"/>
                )}/>
            </Switch>
        )
    }
}

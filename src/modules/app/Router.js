/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

export default ({match}) => {
    return (
        <Switch>
            <Route path={`${match.url}/dashboard`} component={require('./pages/dashboard')}/>
            <Route path={`${match.url}/widgets`} component={require('./pages/widgets')}/>
            <Route component={() => (
                <Redirect push to="/app/dashboard"/>
            )}/>
        </Switch>
    )
};

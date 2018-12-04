/**
 * Created by Rayr Lee on 2018/11/2.
 */

/* COMPONENTS LAZY LOADER TEMPLATE */
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

export default ({match}) => {
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
};

/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {Icon} from 'components';
import Messages from './Messages';
import User from './User';
import Notifications from './Notifications';
import Tasks from './Tasks';

export default function () {
    return (
        <nav className="navbar navbar-static-top">
            <a className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <Messages/>
                    <Notifications/>
                    <Tasks/>
                    <User/>
                    {/*<li>*/}
                    {/*    <a data-toggle="control-sidebar"><Icon name={'gears'}/></a>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>
    )
}

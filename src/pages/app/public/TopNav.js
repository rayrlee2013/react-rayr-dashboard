/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import Messages from './Messages';

export default function () {
    return (
        <nav className="navbar navbar-static-top">
            <a className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
                <div className="nav navbar-nav">
                    <Messages></Messages>
                </div>
            </div>
        </nav>
    )
}

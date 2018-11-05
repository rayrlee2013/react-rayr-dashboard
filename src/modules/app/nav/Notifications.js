/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Toggle} from 'components';

@withRouter
export default class extends Component {

    render() {
        return (
            <Toggle className="notifications-menu">
                <Toggle.Top>
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">10</span>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have 10 notifications</li>
                    <li>
                        <ul className="menu">
                            <li>
                                <a href="#">
                                    <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-warning text-yellow"></i> Very long description here that may
                                    not fit into the
                                    page and may cause design problems
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-users text-red"></i> 5 new members joined
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-user text-red"></i> You changed your username
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer"><a href="#">View all</a></li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}

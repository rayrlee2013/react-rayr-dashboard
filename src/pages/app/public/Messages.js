/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Toggle} from 'components';

@withRouter
export default class extends Component {

    render() {
        return (
            <Toggle className="messages-menu">
                <Toggle.Top>
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">4</span>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have 4 messages</li>
                    <li>
                        <ul className="menu">
                            <li>
                                <a href="#">
                                    <div className="pull-left">
                                        <img
                                            src="https://adminlte.io/themes/AdminLTE/dist/img/user3-128x128.jpg"
                                            className="img-circle"
                                            alt="User Image"/>
                                    </div>
                                    <h4>
                                        Support Team
                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                    </h4>
                                    <p>Why not buy a new awesome theme?</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer"><a href="#">See All Messages</a></li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}

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
            <Toggle className="tasks-menu">
                <Toggle.Top>
                    <i className="fa fa-flag-o"></i>
                    <span className="label label-danger">9</span>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have 9 tasks</li>
                    <li>
                        <ul className="menu">
                            <ul className="menu">
                                <li>
                                    <a href="#">
                                        <h3>
                                            Design some buttons
                                            <small className="pull-right">20%</small>
                                        </h3>
                                        <div className="progress xs">
                                            <div className="progress-bar progress-bar-aqua" style={{width: '20%'}}
                                                 role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                                 aria-valuemax="100">
                                                <span className="sr-only">20% Complete</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3>
                                            Create a nice theme
                                            <small className="pull-right">40%</small>
                                        </h3>
                                        <div className="progress xs">
                                            <div className="progress-bar progress-bar-green" style={{width: '40%'}}
                                                 role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                                 aria-valuemax="100">
                                                <span className="sr-only">40% Complete</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3>
                                            Some task I need to do
                                            <small className="pull-right">60%</small>
                                        </h3>
                                        <div className="progress xs">
                                            <div className="progress-bar progress-bar-red" style={{width: '60%'}}
                                                 role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                                 aria-valuemax="100">
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h3>
                                            Make beautiful transitions
                                            <small className="pull-right">80%</small>
                                        </h3>
                                        <div className="progress xs">
                                            <div className="progress-bar progress-bar-yellow" style={{width: '80%'}}
                                                 role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                                 aria-valuemax="100">
                                                <span className="sr-only">80% Complete</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </li>
                    <li className="footer"><a href="#">View all tasks</a></li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}


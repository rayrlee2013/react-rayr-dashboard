/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Toggle, Row, Col} from 'components';

@withRouter
export default class extends Component {

    render() {
        return (
            <Toggle className="user user-menu">
                <Toggle.Top>
                    <img src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg" className="user-image"/>
                    <span className="hidden-xs">Alexander Pierce</span>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="user-header">
                        <img src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg"
                             className="img-circle"/>
                        <p>
                            Alexander Pierce - Web Developer
                            <small>Member since Nov. 2012</small>
                        </p>
                    </li>
                    <li className="user-body">
                        <Row>
                            <Col xs={4} className="text-center">
                                <a href="#">Followers</a>
                            </Col>
                            <Col xs={4} className="text-center">
                                <a href="#">Sales</a>
                            </Col>
                            <Col xs={4} className="text-center">
                                <a href="#">Friends</a>
                            </Col>
                        </Row>
                    </li>
                    <li className="user-footer">
                        <div className="pull-left">
                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                        </div>
                        <div className="pull-right">
                            <a href="#" className="btn btn-default btn-flat">Sign out</a>
                        </div>
                    </li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}

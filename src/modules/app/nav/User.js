/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Toggle, Row, Col} from 'components';

@withRouter
@inject('UserStore')
@observer
export default class extends Component {

    render() {
        const {user} = this.props.UserStore;
        return (
            <Toggle className="user user-menu">
                <Toggle.Top>
                    <img src={user.avatar} className="user-image"/>
                    <span className="hidden-xs">{user.name}</span>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="user-header">
                        <img src={user.avatar}
                             className="img-circle"/>
                        <p>
                            {user.name} - {user.job}
                            <small>{user.date}</small>
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

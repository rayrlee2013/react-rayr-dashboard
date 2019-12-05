/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Toggle, Row, Col, Btn, Abtn} from 'components';

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
                                <a href="#">更新信息</a>
                            </Col>
                            <Col xs={4} className="text-center">
                                <a href="#">权限查询</a>
                            </Col>
                            <Col xs={4} className="text-center">
                                <a href="#">修改密码</a>
                            </Col>
                        </Row>
                    </li>
                    <li className="user-footer">
                        <div className="pull-left">
                            <Btn flat={true} onClick={() => {
                                this.props.history.push('/app/profile');
                            }}>个人中心</Btn>
                        </div>
                        <div className="pull-right">
                            <Abtn href="/login" flat={true}>退出系统</Abtn>
                        </div>
                    </li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}

/**
 * Created by Rayr Lee on 2018/12/21.
 */

import React, {Component} from 'react';
import {Box, Row, Col, Btn} from 'components';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';

const {Header, Body} = Box;

export default class extends Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box widget={true}>
                        <Header border={true}>
                            <h3 className="box-title">最新电影列表</h3>
                        </Header>
                        <Body>
                            <Link to={{
                                pathname: "/courses"
                            }}>About</Link>
                        </Body>
                        <Body>
                            <Btn className="pull-left">上一页</Btn>
                            <Btn className="pull-right">下一页</Btn>
                        </Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}

/**
 * Created by Rayr Lee on 2018/12/21.
 */

import React, {Component} from 'react';
import {Box, Row, Col, Btn} from 'components';

const {Header, Body} = Box;

import List from './list';

export default class extends Component {

    constructor() {
        super()
        console.log('2018');
    }

    render() {
        const {history} = this.props;
        return (
            <Row>
                <Col md={12}>
                    <Box widget={true}>
                        <Header border={true}>
                            <h3 className="box-title">最新电影列表</h3>
                        </Header>
                        <Body>
                        </Body>
                        <Body>
                            <Btn className="pull-left" onClick={() => {
                                history.$reload();
                            }}>上一页</Btn>
                            <Btn className="pull-right">下一页</Btn>
                        </Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}

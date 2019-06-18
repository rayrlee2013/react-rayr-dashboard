/**
 * Created by Rayr Lee on 2018/12/21.
 */

import React, {Component} from 'react';
import {Box, Row, Col, Btn, Card} from 'components';
import {Link} from 'react-router-dom';

const {Header, Body} = Box;

export default class extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col lg={3} xs={6}><Card label={'User Registrations'} data={54}/></Col>
                    <Col lg={3} xs={6}><Card bg={'green'} icon={'calendar-minus-o'} label={'New Orders'}  data={1024}/></Col>
                    <Col lg={3} xs={6}><Card bg={'yellow'} icon={'heartbeat'} label={'Bounce Rate'}  data={86}/></Col>
                    <Col lg={3} xs={6}><Card bg={'red'} icon={'pie-chart'} label={'Unique Visitors'} data={798445}/></Col>
                </Row>
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
            </>
        )
    }
}

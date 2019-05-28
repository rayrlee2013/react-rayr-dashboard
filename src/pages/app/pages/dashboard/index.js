/**
 * Created by Rayr Lee on 2018/12/21.
 */

import React, {Component} from 'react';
import {Box, Row, Col, Btn} from 'components';
import {inject, observer} from 'mobx-react';

const {Header, Body} = Box;

@inject('CommonStore', 'CityStore')
@observer
export default class extends Component {

    render() {
        const {CommonStore, CityStore} = this.props;
        console.log(CityStore);
        return (
            <Row>
                <Col md={12}>
                    <Box widget={true}>
                        <Header border={true}>
                            <h3 className="box-title">最新电影列表</h3>
                        </Header>
                        <Body>
                            {CommonStore.num}
                        </Body>
                        <Body>
                            <Btn className="pull-left" onClick={() => {
                                CommonStore.add();
                            }}>上一页</Btn>
                            <Btn className="pull-right">下一页</Btn>
                        </Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}

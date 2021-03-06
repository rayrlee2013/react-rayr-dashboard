/**
 * Created by Rayr Lee on 2018/12/21.
 */

import React, {Component, Fragment} from 'react';
import {Box, Row, Col, Btn, Card, TabBox, Icon, Datasource} from 'components';
import {Chart} from 'chart';

import PopulationChart from './population';
import GoalChart from './goal';
import Description from './description';

const {Header, Body, Footer} = Box;


@Datasource('dashboard')
class ChartShow extends Component {
    render() {
        const {sourceData, type, height} = this.props;
        return <Chart option={sourceData[type]} height={height}/>
    }
}

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col lg={3} xs={6}>
                        <Card label={'User Registrations'} data={54}/>
                    </Col>
                    <Col lg={3} xs={6}>
                        <Card bg={'green'} icon={'calendar-minus-o'} label={'New Orders'} data={1024}/>
                    </Col>
                    <Col lg={3} xs={6}>
                        <Card bg={'yellow'} icon={'heartbeat'} label={'Bounce Rate'} data={86}/>
                    </Col>
                    <Col lg={3} xs={6}>
                        <Card bg={'red'} icon={'pie-chart'} label={'Unique Visitors'} data={798445}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Box solid={true}>
                            <Header>
                                <Icon name={'book'}/> Monthly Recap Report
                            </Header>
                            <Body style={{height: 290, position: 'relative'}}>
                                <Row>
                                    <Col md={7}><ChartShow type={'chartC'} height={270}/></Col>
                                    <Col md={5}><GoalChart/></Col>
                                </Row>
                            </Body>
                            <Footer>
                                <Description></Description>
                            </Footer>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7}>
                        <TabBox title={'基本图表'} icon={'bar-chart'} iNow={1}>
                            <TabBox.Pane className={'dashboard-height'} name={'折线图'}><ChartShow
                                type={'chartA'}/></TabBox.Pane>
                            <TabBox.Pane className={'dashboard-height'} name={'柱状图'}><ChartShow
                                type={'chartB'}/></TabBox.Pane>
                        </TabBox>
                        <Box solid={true}>
                            <Header>
                                <Icon name={'book'}/> 代办事项
                            </Header>
                            <Body className={'dashboard-height'}>
                            </Body>
                        </Box>
                    </Col>
                    <Col lg={5}>
                        <Box className={'bg-light-blue-gradient'} solid={true}>
                            <Header>
                                <Icon name={'user'}/> 2017年中国人口密度分布
                            </Header>
                            <Body className={'dashboard-height'}>
                                <PopulationChart/>
                            </Body>
                        </Box>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

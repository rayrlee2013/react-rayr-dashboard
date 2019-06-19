/**
 * Created by Rayr Lee on 2018/12/21.
 */

import React, {Component} from 'react';
import {Box, Row, Col, Btn, Card, TabBox, Chart, Icon} from 'components';
import {Link} from 'react-router-dom';

const {Header, Body} = Box;

const option1 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

const option2 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data: [
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
        }
    ]
};

export default class extends Component {

    render() {
        return (
            <>
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
                    <Col lg={7}>
                        <TabBox title={'基本图表'} icon={'bar-chart'} iNow={1}>
                            <TabBox.Pane name={'折线图'}>
                                <Chart option={option1}/>
                            </TabBox.Pane>
                            <TabBox.Pane name={'柱状图'}>
                                <Chart option={option2}/>
                            </TabBox.Pane>
                        </TabBox>
                    </Col>
                    <Col lg={5}>
                        <Box className={'bg-light-blue-gradient'} solid={true}>
                            <Header>
                                <Icon name={'map-marker'}/> 中国地图
                            </Header>
                            <Body>

                            </Body>
                        </Box>
                    </Col>
                </Row>
            </>
        )
    }
}

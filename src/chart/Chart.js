/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import echarts from 'echarts';
import _ from 'loadsh';

const defaultOption = {
    legend: {
        top: 20
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: false
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DBDBDB'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        }
    }
}

export default class extends React.Component {

    chart = null;

    static propTypes = {
        className: PropTypes.string,
        height: PropTypes.number

    };

    static defaultProps = {
        className: '',
        height: 420,
    };

    resize() {
        this.chart.resize();
    }

    componentDidMount() {
        let option = _.merge(this.props.option, defaultOption);
        this.chart = echarts.init(this.refs.echart, 'light');
        this.chart.setOption(option);
        window.addEventListener('resize', this.resize.bind(this), false);
    }

    componentWillUnmount() {
        this.chart.dispose();
        this.chart = null;
        window.removeEventListener('resize', this.resize.bind(this), false);
    }

    render() {
        return (
            <div ref="echart" className={classnames('chart', this.props.className)}
                 style={{minHeight: this.props.height}}></div>
        )
    }
}

/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Toggle} from 'components';
import {Progress} from 'chart';

const TaskDemoData = [
    {
        id: 1,
        title: 'Design some buttons',
        value: 76,
        type: 'aqua'
    },
    {
        id: 2,
        title: 'Create a nice theme',
        value: 40,
        type: 'green'
    },
    {
        id: 3,
        title: 'Some task I need to do',
        value: 34,
        type: 'red'
    },
    {
        id: 4,
        title: 'Make beautiful transitions',
        value: 80,
        type: 'yellow'
    }
];

function TaskItem({data}) {
    return (
        <li>
            <a>
                <h3>
                    {data.title}
                    <small className="pull-right">{data.value}%</small>
                </h3>
                <Progress size={'xs'} value={data.value} type={data.type}/>
            </a>
        </li>
    )
}

@withRouter
export default class extends Component {

    render() {
        return (
            <Toggle className="tasks-menu">
                <Toggle.Top>
                    <i className="fa fa-flag-o"></i>
                    <span className="label label-danger">9</span>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have 9 tasks</li>
                    <li>
                        <ul className="menu">
                            <ul className="menu">
                                {
                                    TaskDemoData.map((item) => <TaskItem key={item.id} data={item}/>)
                                }
                            </ul>
                        </ul>
                    </li>
                    <li className="footer"><a href="#">View all tasks</a></li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}


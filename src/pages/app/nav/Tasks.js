/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Toggle, Label, Icon} from 'components';
import {$_ajax} from 'services';
import {Progress} from 'chart';


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

    constructor() {
        super()
        this.state = {
            tasks: []
        };
    }

    componentWillMount() {
        $_ajax.get('tasks').then((res) => {
            this.setState({
                tasks: res
            });
        });
    }

    render() {
        const {tasks} = this.state;
        return (
            <Toggle className="tasks-menu">
                <Toggle.Top>
                    <Icon name={'flag-o'}/>
                    <Label type={'danger'}>{tasks.length}</Label>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have 9 tasks</li>
                    <li>
                        <ul className="menu">
                            <ul className="menu">
                                {
                                    tasks.map((item) => <TaskItem key={item.id} data={item}/>)
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


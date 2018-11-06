/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {$_ajax} from 'services';
import {Toggle, Label, Icon} from 'components';

function NotificationsItem({data}) {
    return (
        <li>
            <a>
                <Icon name={data.icon} color={data.color}/> {data.content}
            </a>
        </li>
    )
}

@withRouter
export default class extends Component {

    constructor() {
        super()
        this.state = {
            notifications: []
        };
    }

    componentWillMount() {
        $_ajax.get('notifications').then((res) => {
            this.setState({
                notifications: res
            });
        });
    }

    render() {
        const {notifications} = this.state;
        return (
            <Toggle className="notifications-menu">
                <Toggle.Top>
                    <Icon name={'bell-o'}/>
                    <Label type={'warning'}>{notifications.length}</Label>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have 10 notifications</li>
                    <li>
                        <ul className="menu">
                            {
                                notifications.map((item) => <NotificationsItem key={item.id} data={item}/>)
                            }
                        </ul>
                    </li>
                    <li className="footer"><a href="#">View all</a></li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}

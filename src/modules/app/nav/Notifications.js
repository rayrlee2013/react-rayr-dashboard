/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Toggle, Label, Icon} from 'components';

const demoData = [
    {
        id: 1,
        content: '5 new members joined today',
        icon: 'users',
        color: 'aqua'
    },
    {
        id: 2,
        content: 'Very long description here that may not fit into the page and may cause design problems',
        icon: 'warning',
        color: 'yellow'
    },
    {
        id: 3,
        content: '5 new members joined today',
        icon: 'users',
        color: 'red'
    },
    {
        id: 4,
        content: '25 sales made',
        icon: 'shopping-cart',
        color: 'green'
    },
    {
        id: 5,
        content: 'You changed your username',
        icon: 'user',
        color: 'red'
    }
];

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

    render() {
        return (
            <Toggle className="notifications-menu">
                <Toggle.Top>
                    <Icon name={'bell-o'}/>
                    <Label type={'warning'}>10</Label>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have 10 notifications</li>
                    <li>
                        <ul className="menu">
                            {
                                demoData.map((item) => <NotificationsItem key={item.id} data={item}/>)
                            }
                        </ul>
                    </li>
                    <li className="footer"><a href="#">View all</a></li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}

/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Toggle} from 'components';

const MessagesDemoData = [
    {
        id: 1,
        title: 'Support Team',
        breif: 'Why not buy a new awesome theme?',
        avatar: 'user2-160x160.jpg',
        time: '5'
    },
    {
        id: 2,
        title: 'Design Team',
        breif: 'Why not buy a new awesome theme?',
        avatar: 'user3-128x128.jpg',
        time: '1'
    },
    {
        id: 3,
        title: 'Developers',
        breif: 'Why not buy a new awesome theme?',
        avatar: 'user4-128x128.jpg',
        time: '4'
    },
    {
        id: 4,
        title: 'Sales Department',
        breif: 'Why not buy a new awesome theme?',
        avatar: 'user3-128x128.jpg',
        time: '1'
    },
    {
        id: 5,
        title: 'Developers',
        breif: 'Why not buy a new awesome theme?',
        avatar: 'user4-128x128.jpg',
        time: '4'
    }
];

function MessagesItem({data}) {
    return (
        <li>
            <a>
                <div className="pull-left">
                    <img src={`https://adminlte.io/themes/AdminLTE/dist/img/${data.avatar}`} className="img-circle"/>
                </div>
                <h4>
                    {data.title}
                    <small><i className="fa fa-clock-o"></i> {data.time} mins</small>
                </h4>
                <p>{data.breif}</p>
            </a>
        </li>
    )
}

@withRouter
export default class extends Component {

    render() {
        return (
            <Toggle className="messages-menu">
                <Toggle.Top>
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">4</span>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have 4 messages</li>
                    <li>
                        <ul className="menu">
                            {
                                MessagesDemoData.map((item) => <MessagesItem key={item.id} data={item}/>)
                            }
                        </ul>
                    </li>
                    <li className="footer"><a href="#">See All Messages</a></li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}

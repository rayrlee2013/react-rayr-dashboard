/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {Toggle, Label, Icon} from 'components';

function MessagesItem({data}) {
    return (
        <li>
            <a>
                <div className="pull-left">
                    <img src={`https://adminlte.io/themes/AdminLTE/dist/img/${data.avatar}`} className="img-circle"/>
                </div>
                <h4>
                    {data.title}
                    <small><Icon name={'clock-o'}/> {data.time} mins</small>
                </h4>
                <p>{data.breif}</p>
            </a>
        </li>
    )
}

@withRouter
@inject('MessageStore')
@observer
export default class extends Component {

    render() {
        const {messages} = this.props.MessageStore;
        return (
            <Toggle className="messages-menu">
                <Toggle.Top>
                    <Icon name={'envelope-o'}/>
                    <Label type={'success'}>{messages.length}</Label>
                </Toggle.Top>
                <Toggle.Menu>
                    <li className="header">You have {messages.length} messages</li>
                    <li>
                        <ul className="menu">
                            {
                                messages.map((item) => <MessagesItem key={item.id} data={item}/>)
                            }
                        </ul>
                    </li>
                    <li className="footer"><a href="#">See All Messages</a></li>
                </Toggle.Menu>
            </Toggle>
        )
    }
}

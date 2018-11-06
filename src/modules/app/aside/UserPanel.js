/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Icon} from 'components';

@inject('UserStore')
@observer
export default class extends Component {
    render() {
        const {user} = this.props.UserStore;
        return (
            <div className="user-panel">
                <div className="pull-left image">
                    <img src={user.avatar}
                         className="img-circle" alt="User Image"/>
                </div>
                <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <a><Icon name={'circle'} color={'success'}/> Online</a>
                </div>
            </div>
        )
    }
}


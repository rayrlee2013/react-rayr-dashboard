/**
 * Created by Rayr Lee on 2018/11/7.
 */

import React, {Component} from 'react';
import {Icon, Input} from 'components';
import {Link, withRouter} from 'react-router-dom';

export default class extends Component {
    render() {
        return (
            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                <li className={"active"}>
                    <Link to={{pathname: '/app/dashboard'}}>
                        <Icon name={'dashboard'}/>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to={{pathname: '/app/widgets'}}>
                        <Icon name={'th'}/>
                        Widgets
                    </Link>
                </li>
                <li>
                    <Link to={{pathname: '/app/charts'}}>
                        <Icon name={'pie-chart'}/>
                        Charts
                    </Link>
                </li>
            </ul>
        )
    }
}

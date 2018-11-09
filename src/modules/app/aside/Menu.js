/**
 * Created by Rayr Lee on 2018/11/7.
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Icon, Input} from 'components';
import {Link, withRouter} from 'react-router-dom';

class MenuItem extends Component {
    render() {
        const {data} = this.props;
        return (
            <li>
                <Link to={{pathname: '/app/dashboard'}}>
                    <Icon name={data.icon || 'circle-o'}/>
                    {data.name}
                </Link>
            </li>
        )
    }
}

class Menu extends Component {
    render() {
        const {data} = this.props;
        return (
            <li className="treeview">
                <a>
                    <Icon name="laptop"/>
                    <span>{data.name}</span>
                    <span className="pull-right-container">
                        <Icon name="angle-left" className="pull-right"/>
                    </span>
                </a>
                <ul className="treeview-menu" style={{display: "none"}}>
                    {
                        data.children.map(item => {
                            return (
                                <MenuItem key={item.id} data={item}/>
                            )
                        })
                    }
                </ul>
            </li>
        )
    }
}

@inject('MenuStore')
@observer
export default class extends Component {
    render() {
        const {menu} = this.props.MenuStore;

        return (
            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                {
                    menu.map((item) => {
                        if (item.isLeaf) {
                            return <MenuItem key={item.id} data={item}/>
                        } else {
                            return <Menu key={item.id} data={item}/>;
                        }
                    })
                }
            </ul>
        )
    }
}

/**
 * Created by Rayr Lee on 2018/11/7.
 */

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Icon, Input} from 'components';
import {Link, withRouter} from 'react-router-dom';
import {NavLink} from 'components';

class MenuItem extends Component {
    render() {
        const {data, pathname} = this.props;
        return (
            <li>
                <NavLink to={{pathname: `/app/${data.url}`}} nPath={pathname}>
                    <Icon name={data.icon || 'circle-o'}/>
                    <span>{data.name}</span>
                </NavLink>
            </li>
        )
    }
}

class Menu extends Component {
    render() {
        const {data, pathname} = this.props;
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
                                <MenuItem key={item.id} data={item} pathname={pathname}/>
                            )
                        })
                    }
                </ul>
            </li>
        )
    }
}

@withRouter
@inject('MenuStore')
@observer
export default class extends Component {

    render() {
        const {menu} = this.props.MenuStore;
        const {pathname} = this.props.location;

        return (
            <ul className="sidebar-menu rayr-sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                {
                    menu.map((item) => {
                        if (item.isLeaf) {
                            return <MenuItem key={item.id} data={item} pathname={pathname}/>
                        } else {
                            return <Menu key={item.id} data={item} pathname={pathname}/>;
                        }
                    })
                }
            </ul>
        )
    }
}

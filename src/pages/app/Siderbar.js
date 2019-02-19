/**
 * Created by Rayr Lee on 2018/7/16.
 */

import React, {Component} from 'react';
import UserPanel from './aside/UserPanel';
import Search from './aside/Search';
import Menu from './aside/Menu';

export default class extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar" style={{height: 'auto'}}>
                    <UserPanel/>
                    <Search/>
                    <Menu/>
                </section>
            </aside>
        )
    }
}

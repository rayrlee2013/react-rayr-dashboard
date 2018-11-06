/**
 * Created by Rayr Lee on 2018/7/16.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import UserPanel from './aside/UserPanel';
import Search from './aside/Search';

@withRouter
export default class extends Component {

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar" style={{height: 'auto'}}>
                    <UserPanel/>
                    <Search/>
                </section>
            </aside>
        )
    }
}

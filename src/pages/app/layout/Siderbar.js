/**
 * Created by Rayr Lee on 2018/7/16.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

@withRouter
export default class extends Component {

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar" style={{height: 'auto'}}>
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg"
                                 className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                </section>
            </aside>
        )
    }
}

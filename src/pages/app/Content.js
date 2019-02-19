/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Icon} from 'components';

import Router from './Router';

export default class extends Component {

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>Version React</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><Icon name={'dashboard'}></Icon> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ol>
                </section>
                <section className="content">
                    <Router {...this.props}/>
                </section>
            </div>
        )
    }
}

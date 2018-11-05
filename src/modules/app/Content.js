/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Icon} from 'components';
import Router from './Router';

export default function (props) {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Dashboard
                    <small>Control panel</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><Icon name={'dashboard'}></Icon> Home</a></li>
                    <li className="active">Dashboard</li>
                </ol>
            </section>
            <section className="content">
                <Router {...props}/>
            </section>
        </div>
    )
}

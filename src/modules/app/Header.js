/**
 * Created by Rayr Lee on 2018/7/16.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './nav/Logo';
import TopNav from './nav/TopNav';

export default class extends Component {
    render() {
        return (
            <header className="main-header">
                <Logo/>
                <TopNav/>
            </header>
        )
    }
}

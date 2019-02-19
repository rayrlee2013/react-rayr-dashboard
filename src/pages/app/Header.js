/**
 * Created by Rayr Lee on 2018/7/16.
 */

import React, {Component} from 'react';
import Logo from './nav/Logo';
import TopNav from './nav/TopNav';

export default class extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <header className="main-header">
                <Logo/>
                <TopNav/>
            </header>
        )
    }
}

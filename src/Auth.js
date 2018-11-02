/**
 * Created by Rayr Lee on 2018/6/11.
 */

import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import {Router} from 'react-router';

import history from './history';
import stores from './stores';
import Pages from './pages';

window.RAYR_GLOBAL_STORES = stores;

export default class extends Component {

    constructor() {
        super();
        this.state = {
            isAuth: true
        };
    }

    componentWillMount() {

    }

    render() {
        const {isAuth} = this.state;
        return isAuth ? (
            <Provider {...stores}>
                <Router history={history}><Pages/></Router>
            </Provider>
        ) : (
            <span>加载中...</span>
        );
    }
}

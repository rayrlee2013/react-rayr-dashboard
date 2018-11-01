/**
 * Created by Rayr Lee on 2018/6/11.
 */

import React, {Component} from "react";
import {Provider} from 'mobx-react';
import {Router} from 'react-router';
import {$_agent, $_toast, $_localstorage, $_ajax} from 'services';

import history from './history';
import stores from './stores';
import Pages from './pages';

window.XLS_GLOBAL_STORES = stores;

export default class extends Component {

    constructor() {
        super();
        this.state = {
            isAuth: false
        };
        this.points = [];
    }

    componentWillMount() {
        $_agent.user().then((res) => {
            XLS_GLOBAL_STORES.UserStore.initUser(res);
            XLS_GLOBAL_STORES.PointsStore.initPoints(res);
            if (res.level !== 1) {
                $_ajax.post('bcbase/v1/shop/shopDetail', {
                    id: res.shopId
                }).then((val) => {
                    $_localstorage.set('shopId', val.id);
                    $_localstorage.set('shopName', val.shopName);
                });
            }
        }).finally(() => {
            this.setState({
                isAuth: true
            });
        });
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

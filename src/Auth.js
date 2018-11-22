/**
 * Created by Rayr Lee on 2018/6/11.
 */

import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import {Router} from 'react-router';
import {$_ajax} from 'services';
import {HomeLoading} from 'components';

import history from './history';
import stores from './stores';
import Pages from './modules';

window.RAYR_GLOBAL_STORES = stores;

export default class extends Component {

    constructor() {
        super();
        this.state = {
            isAuth: false
        };
    }

    componentWillMount() {
        $_ajax.get('userinfo').then((res) => {
            RAYR_GLOBAL_STORES.UserStore.initUser(res);
        }, () => {

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
        ) : <HomeLoading/>;
    }
}

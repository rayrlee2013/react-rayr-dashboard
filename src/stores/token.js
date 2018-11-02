/**
 * Created by Rayr Lee on 2017/12/20.
 */

import {observable, action} from 'mobx';
import {$_localstorage} from 'services';

class TokenStore {

    @observable token = $_localstorage.get('token') || '';

    @action
    initToken(res) {
        this.token = res;
        $_localstorage.set('token', res);
    }

    @action
    clearToken() {
        this.token = '';
        $_localstorage.delete('token');
    }
}

export default new TokenStore();

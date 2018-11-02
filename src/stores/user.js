import {observable, action} from 'mobx';

class UserStore {

    @observable user;
    @observable isLogin = false;

    @action
    initUser(res) {
        this.user = res;
        this.isLogin = true;
    }

    @action
    clearUser() {
        this.user = null;
        this.isLogin = false;
    }
}

export default new UserStore();

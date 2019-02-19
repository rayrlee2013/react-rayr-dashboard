import {observable, action} from 'mobx';

class UserStore {

    @observable user = {
        name: '真 · 黑白猪',
        job: 'Web Developer',
        date: 'Member since Nov. 2012',
        avatar: 'https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg',
        status: 1
    };

    @observable isLogin = true;

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

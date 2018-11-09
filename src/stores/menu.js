/**
 * Created by Rayr Lee on 2017/12/20.
 */

import {observable, action} from 'mobx';
import {$_localstorage, $_ajax} from 'services';

class MenuStore {

    constructor() {
        this.initMenu();
    }

    @observable menu = [];

    @action
    initMenu() {
        $_ajax.get('menus').then(action((res) => {
            this.menu = res;
        }));
    }
}

export default new MenuStore();

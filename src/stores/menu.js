/**
 * Created by Rayr Lee on 2017/12/20.
 */

import {observable, action} from 'mobx';
import shortid from 'shortid';

class MenuStore {

    constructor() {
        this.initMenu();
    }

    @observable menu = [];

    @action
    initMenu() {
        this.menu = [
            {
                id: 1,
                name: '房源管理',
                url: 'home',
                icon: 'home',
                isLeaf: false,
                children: [
                    {
                        id: 4,
                        name: '房源列表',
                        url: 'list',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 5,
                        name: '审核房源',
                        url: 'check',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 13,
                        name: '绑定房源',
                        url: 'bind',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 14,
                        name: '房源日历',
                        url: 'date',
                        icon: null,
                        isLeaf: true
                    }
                ]
            },
            {
                id: 2,
                name: '订单管理',
                url: 'orders',
                icon: 'list',
                isLeaf: false,
                children: [
                    {
                        id: 15,
                        name: '订单列表',
                        url: 'list',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 16,
                        name: '收入列表',
                        url: 'income',
                        icon: null,
                        isLeaf: true
                    }
                ]
            },
            {
                id: 3,
                name: '客户管理',
                url: 'client',
                icon: 'users',
                isLeaf: false,
                children: [
                    {
                        id: 17,
                        name: '客户列表',
                        url: 'list',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 18,
                        name: '认证待审',
                        url: 'check',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 19,
                        name: '黑名单池',
                        url: 'black',
                        icon: null,
                        isLeaf: true
                    }
                ]
            },
            {
                id: 6,
                name: '清洁管理',
                url: 'clean',
                icon: 'check-square',
                isLeaf: false,
                children: [
                    {
                        id: 7,
                        name: '订单列表',
                        url: 'list',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 8,
                        name: '保洁员池',
                        url: 'cleaner',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 9,
                        name: '黑名单池',
                        url: 'black',
                        icon: null,
                        isLeaf: true
                    }
                ]
            },
            {
                id: 20,
                name: '权限管理',
                url: 'limits',
                icon: 'warning',
                isLeaf: false,
                children: [
                    {
                        id: 21,
                        name: '权限列表',
                        url: 'list',
                        icon: null,
                        isLeaf: true
                    },
                    {
                        id: 22,
                        name: '员工信息',
                        url: 'member',
                        icon: null,
                        isLeaf: true
                    }
                ]
            }
        ];
    }
}

export default new MenuStore();

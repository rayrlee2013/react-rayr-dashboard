/**
 * Created by Rayr Lee on 2019-02-22.
 */

import {observable, action} from 'mobx';

class commonStore {

    constructor() {
        this.initMessage();
        this.initNotifications();
        this.initTasks();
    }

    @observable messages = [];
    @observable notifications = [];
    @observable tasks = [];
    @observable num = 0;

    @action
    initMessage() {
        this.messages = [
            {
                id: 1,
                title: 'Support Team',
                breif: 'Why not buy a new awesome theme?',
                avatar: 'user2-160x160.jpg',
                time: '5'
            },
            {
                id: 2,
                title: 'Design Team',
                breif: 'Why not buy a new awesome theme?',
                avatar: 'user3-128x128.jpg',
                time: '1'
            },
            {
                id: 3,
                title: 'Developers',
                breif: 'Why not buy a new awesome theme?',
                avatar: 'user4-128x128.jpg',
                time: '4'
            },
            {
                id: 4,
                title: 'Sales Department',
                breif: 'Why not buy a new awesome theme?',
                avatar: 'user3-128x128.jpg',
                time: '1'
            },
            {
                id: 5,
                title: 'Developers',
                breif: 'Why not buy a new awesome theme?',
                avatar: 'user4-128x128.jpg',
                time: '4'
            }
        ];
    }

    @action
    initNotifications() {
        this.notifications = [
            {
                id: 1,
                content: '5 new members joined today',
                icon: 'users',
                color: 'aqua'
            },
            {
                id: 2,
                content: 'Very long description here that may not fit into the page and may cause design problems',
                icon: 'warning',
                color: 'yellow'
            },
            {
                id: 3,
                content: '5 new members joined today',
                icon: 'users',
                color: 'red'
            },
            {
                id: 4,
                content: '25 sales made',
                icon: 'shopping-cart',
                color: 'green'
            },
            {
                id: 5,
                content: 'You changed your username',
                icon: 'user',
                color: 'red'
            }
        ];
    }

    @action
    initTasks() {
        this.tasks = [
            {
                id: 1,
                title: 'Design some buttons',
                value: 76,
                type: 'aqua'
            },
            {
                id: 2,
                title: 'Create a nice theme',
                value: 40,
                type: 'green'
            },
            {
                id: 3,
                title: 'Some task I need to do',
                value: 34,
                type: 'red'
            },
            {
                id: 4,
                title: 'Make beautiful transitions',
                value: 80,
                type: 'yellow'
            }
        ];
    }

    @action
    add() {
        this.num = this.num + 1;
    }
}

export default new commonStore();

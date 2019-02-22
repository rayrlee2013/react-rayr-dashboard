/**
 * Created by Rayr Lee on 2019-02-22.
 */

import {observable, action} from 'mobx';

class MessageStore {

    constructor() {
        this.initMessage();
    }

    @observable messages = [];

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
}

export default new MessageStore();

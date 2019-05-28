import {useState, useEffect} from 'react';
import {observable, action} from 'mobx';
import {$_ajax} from 'services';
import {cityData} from '../services/data';

class CityStore {

    @observable guess = {};
    @observable hot = [];
    @observable group = {};

    //状态
    @observable guessStatus = 'pending'; // "pending" / "done" / "error"
    @observable hotStatus = 'pending';
    @observable groupStatus = 'pending';

    @action
    getData(type) {
        let t = this;
        cityData({type}).then((res) => {
            t[type] = res;
            t[`${type}Status`] = 'done';
        }, () => {
            t[`${type}Status`] = 'error';
        });
    }
}

export default new CityStore();

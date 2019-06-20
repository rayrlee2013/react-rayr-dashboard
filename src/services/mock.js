/**
 * Created by Rayr Lee on 2017/2/8.
 */

import axios from 'axios';

const pre = 'https://www.easy-mock.com/mock/5d0b41feb16ec30f933be171/heibaizhu_api/';

export default {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            fetch(`${pre}${url}`).then(res => res.json()).then(res => {
                if (res.status === 0) {
                    resolve(res.data);
                } else {
                    reject(res.msg);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }
}

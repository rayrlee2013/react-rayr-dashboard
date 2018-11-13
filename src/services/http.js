/**
 * Created by Rayr Lee on 2018/11/9.
 */

import axios from 'axios';

export default {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(`/github/${url}`, {params}).then((res) => {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    reject(`GET请求, 状态码为: ${res.status}`);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

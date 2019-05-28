/**
 * Created by Rayr Lee on 2017/2/8.
 */

import axios from 'axios';

export default {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {params}).then((res) => {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    console.warn(`请求异常，状态码为：${res.status}`);
                    reject(`GET请求, 状态码为: ${res.status}`);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

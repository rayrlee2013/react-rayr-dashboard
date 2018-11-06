/**
 * Created by Rayr Lee on 2017/2/8.
 */

import axios from 'axios';
import $_url from './url';

export default {
    post(url, params = {}) {

    },
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/${url}`, {params}).then((res) => {
                if (res.status === 200) {
                    if (res.data.errno === 100000) {
                        resolve(res.data.data);
                    } else {
                        reject(res.data);
                    }
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

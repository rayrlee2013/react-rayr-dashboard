/**
 * Created by Rayr Lee on 2017/11/20.
 */

import queryString from 'query-string';

export default {
    init(obj) {
        let _obj = {};

        if (Object.prototype.toString.call(obj) !== '[object Object]' || JSON.stringify(obj) === '{}') {
            return '';
        }

        for (let i in obj) {
            if (!obj[i]) continue;
            _obj[i] = obj[i];
        }

        return '?' + queryString.stringify(_obj);
    },
    unInit(url) {
        if (!url) return {};
        return queryString.parse(url);
    },
    initDel(obj) {
        let _obj = {};

        if (!obj || Object.prototype.toString.call(obj) !== '[object Object]' || JSON.stringify(obj) === '{}') {
            return {};
        }

        for (let i in obj) {
            if (!obj[i] && obj[i] !== 0) continue;
            _obj[i] = obj[i];
        }

        return _obj;
    }
};

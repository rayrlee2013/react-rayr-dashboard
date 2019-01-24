/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React from 'react';
import axios from 'axios';

axios.defaults.headers.common['AccessToken'] = window.localStorage.getItem('op_iot_token') || '';

export default (fn) => C => {

    class DataWarp extends React.Component {

        constructor() {
            super()
            this.state = {
                status: 'WAITING'
            };
            this.propsFnObj = this.refetchDataFromMappings();
        }

        getType(str) {
            var temp = str.replace(/[A-Z]/g, function (match) {
                return "_" + match.toLowerCase();
            });
            return temp.split('_')[0];
        }

        refetchDataFromMappings() {
            let mappings = fn(this.props);
            let mappingsFn = {};
            let _t = this;

            Object.keys(mappings).forEach(prop => {
                mappingsFn[prop] = function (param) {
                    let {url, params} = mappings[prop](param),
                        _type = _t.getType(prop);
                    return _t[`${_type}FetchBind`](url, params);
                };
            });

            return mappingsFn;
        }

        getFetchBind(url, params) {
            return new Promise((resolve, reject) => {
                axios.get(`/iot/${url}`, {params}).then((res) => {
                    if (res.status === 200) {
                        reject(res.data);
                    } else {
                        reject(`GET请求, 状态码为: ${res.status}`);
                    }
                }).catch((err) => {
                    reject(err);
                });
            });
        }

        postFetchBind(url, params) {
            this.setState({
                status: 'LOADING'
            });

            return new Promise((resolve, reject) => {
                axios.post(`/iot/${url}`, params).then((res) => {
                    this.setState({
                        status: 'WAITING'
                    });
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            resolve(res.data.data);
                        } else {
                            reject(res.data);
                        }
                    } else {
                        reject(`GET请求, 状态码为: ${res.status}`);
                    }
                }).catch((err) => {
                    reject(err);
                    this.setState({
                        status: 'WAITING'
                    });
                });
            });
        }

        render() {
            return <C {...this.props} {...this.propsFnObj} fetchStatus={this.state.status}/>
        }
    };

    return DataWarp;
}

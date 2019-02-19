/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React from 'react';
import axios from 'axios';

axios.defaults.headers.common['AccessToken'] = window.localStorage.getItem('op_iot_token') || '';

function Loading() {
    return <div>加载中</div>
}

function Error() {
    return <div>加载失败</div>
}

function DataError({sourceData}) {
    return (
        <div>
            <h5>API错误，错误代码: {sourceData.code}</h5>
            <p>错误信息: {sourceData.desc}</p>
        </div>
    )
}

export default ({url, params}) => C => {

    class DataBox extends React.Component {

        constructor() {
            super()
            this.state = {
                status: 'LOADING',
                data: null
            }
        }

        componentDidMount() {
            axios.get(`/iot/${url}`, {params}).then((res) => {
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        this.setState({
                            data: res.data.data,
                            status: 'SUCCESS',
                        });
                    } else {
                        this.setState({
                            status: 'DATA_ERROR',
                            data: res.data
                        });
                    }
                } else {
                    this.setState({
                        status: 'ERROR',
                    });
                }
            }).catch((err) => {
                this.setState({
                    status: 'ERROR',
                });
            });
        }

        render() {

            const {status} = this.state;

            if (status === 'LOADING') {
                return <Loading/>
            }

            if (status === 'ERROR') {
                return <Error/>
            }

            if (status === 'DATA_ERROR') {
                return <DataError sourceData={this.state.data}/>
            }

            if (status === 'SUCCESS') {
                return <C {...this.props} sourceData={this.state.data}/>
            }
        }
    };

    return DataBox;
}

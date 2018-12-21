/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React from 'react';
import axios from 'axios';

function Loading() {
    return <div>加载中</div>
}

function Error() {
    return <div>加载失败</div>
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
            axios.get(`/v2/movie/${url}`, {params}).then((res) => {
                if (res.status === 200) {
                    this.setState({
                        data: res.data,
                        status: 'SUCCESS',
                    });
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

            if (status === 'SUCCESS') {
                return <C {...this.props} sourceData={this.state.data}/>
            }
        }
    };

    return DataBox;
}

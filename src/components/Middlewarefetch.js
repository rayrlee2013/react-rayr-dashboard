/**
 * Created by Rayr Lee on 2019-02-25.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {inject, observer} from 'mobx-react';

function Loading() {
    return <span>加载中...</span>
}

export default (name) => {

    const STORE = `${name}Store`;

    @inject(STORE)
    @observer
    class MiddleBox extends React.Component {

        constructor() {
            super()
            this.state = {
                component: null
            };
        }

        componentDidMount() {
            const {params} = this.props;
            this.props[STORE].getData(params);
        }

        static getDerivedStateFromProps(nextProps, prevState) {
            console.log(nextProps[STORE]);
        }

        render() {
            return this.props.children(this.props[STORE])
        }
    }

    return MiddleBox;
}



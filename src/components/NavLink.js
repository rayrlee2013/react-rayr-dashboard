/**
 * Created by Rayr Lee on 2018/11/7.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

export default class extends Component {

    render() {
        const {to, nPath} = this.props;
        const cls = classnames({
            'rayr-active': nPath === to.pathname
        });

        return (
            <Link to={to} className={cls}>{this.props.children}</Link>
        )
    }
}

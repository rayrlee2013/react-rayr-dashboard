/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    render() {
        return (
            <div className={classnames('rayr-switch-icheck', this.props.className)}>
                <span></span>
                <label>{this.props.children}</label>
            </div>
        )
    }
}

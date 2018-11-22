/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(['default', 'primary', 'danger', 'info', 'warning']),
        size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
        flat: PropTypes.bool,
        block: PropTypes.bool
    };

    static defaultProps = {
        className: '',
        type: 'default',
        size: 'md',
        flat: false,
        block: false
    };

    render() {

        let _type = `btn-${this.props.type}`,
            _size = this.props.type !== 'md' ? `btn-${this.props.size}` : '',
            _flat = this.props.flat ? `btn-flat` : '',
            _block = this.props.flat ? `btn-block` : '';

        return (
            <a
                href={this.props.href}
                className={classnames('btn', _type, _size, _flat, _block, this.props.className)}>{this.props.children}
            </a>
        );
    }
};

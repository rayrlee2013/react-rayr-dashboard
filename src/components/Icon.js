/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string
    };

    static defaultProps = {
        name: 'default',
        size: 14,
        color: ''
    };

    render() {

        const {color, size, name} = this.props;
        const _color = this.props.color ? `text-${color}` : '';
        const _cls = classnames('fa', `fa-${name}`, _color, this.props.className);

        return (
            <i className={_cls} style={{fontSize: `${size}px`}}></i>
        )
    }
}

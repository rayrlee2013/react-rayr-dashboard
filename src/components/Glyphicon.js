/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        name: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string
    };

    static defaultProps = {
        className: '',
        name: 'default',
        size: 14,
        color: ''
    };

    render() {

        const {color, size, name} = this.props;
        const _color = this.props.color ? `text-${color}` : '';
        const _cls = classnames('glyphicon', `glyphicon-${name}`, _color, this.props.className);

        return (
            <span className={_cls} style={{fontSize: `${size}px`}}></span>
        )
    }
}

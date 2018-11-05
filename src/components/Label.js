/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        className: '',
        type: 'default'
    };

    render() {

        const _cls = classnames('label', `label-${this.props.type}`, this.props.className);

        return (
            <span className={_cls}>{this.props.children}</span>
        )
    }
}

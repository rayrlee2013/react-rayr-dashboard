/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        size: PropTypes.number
    };

    static defaultProps = {
        name: 'default',
        size: 14
    };

    render() {

        const _cls = classnames('fa', `fa-${this.props.name}`);

        return (
            <i className={_cls} style={{fontSize: `${this.props.size}px`}}></i>
        )
    }
}

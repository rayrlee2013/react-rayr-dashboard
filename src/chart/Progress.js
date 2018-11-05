/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.number,
        size: PropTypes.string

    };

    static defaultProps = {
        className: '',
        type: '',
        value: 0,
        size: ''
    };

    render() {

        const {value, size, type} = this.props;

        let typeBar = type ? `progress-bar-${type}` : type;

        return (
            <div className={classnames('progress', size, this.props.className)}>
                <div className={classnames('progress-bar', typeBar)} style={{width: `${value}%`}}>
                    <span className="sr-only">{`${value}% Complete`}</span>
                </div>
            </div>
        )
    }
}

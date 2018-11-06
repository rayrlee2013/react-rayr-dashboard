/**
 * Created by Rayr Lee on 2018/11/2.
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
            <input type="text" {...this.props}
                   className={classnames('form-control', this.props.className)}
                   onChange={(e) => {
                       this.props.onChange(e.target.value, e);
                   }}/>
        )
    }
}

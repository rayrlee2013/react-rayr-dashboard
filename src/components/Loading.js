/**
 * Created by Rayr Lee on 2019/6/20.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        return (
            <div className="lds-box">
                <div className="lds-dual-ring"></div>
                <div className="lds-dual-text">{this.props.children}</div>
            </div>
        )
    }
}


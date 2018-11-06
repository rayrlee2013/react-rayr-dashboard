/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Header extends React.Component {
    render() {
        let _cls = classnames({
            'box-header': true,
            'with-border': this.props.border
        });

        return (
            <div className={_cls}>{this.props.children}</div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className={classnames('box-body', this.props.className)}>{this.props.children}</div>
        )
    }
}

export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(['default', 'primary', 'danger', 'info', 'warning']),
        widget: PropTypes.bool,
        solid: PropTypes.bool
    };

    static defaultProps = {
        className: '',
        type: 'default',
        widget: false,
        solid: false
    };

    static Header = Header;

    static Body = Body;

    render() {

        let _type = `box-${this.props.type}`,
            _widget = this.props.widget ? `box-widget` : '',
            _solid = this.props.solid ? `box-solid` : '';

        return (
            <div className={classnames('box', _type, _widget, _solid, this.props.className)}>
                {this.props.children}
            </div>
        )
    }
}

/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Top extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        tag: PropTypes.string
    };

    static defaultProps = {
        className: '',
        tag: 'a'
    };

    render() {

        const Tag = this.props.tag;

        return (
            <Tag {...this.props} className={classnames('dropdown-toggle', this.props.className)} data-toggle="dropdown">
                {this.props.children}
            </Tag>
        )
    }
}

class Menu extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        tag: PropTypes.string
    };

    static defaultProps = {
        className: '',
        tag: 'ul'
    };

    render() {
        const Tag = this.props.tag;
        return (
            <Tag {...this.props} className={classnames('dropdown-menu', this.props.className)}>
                {this.props.children}
            </Tag>
        )
    }
}

export default class extends React.Component {

    static Top = Top;

    static Menu = Menu;

    render() {
        return (
            <li {...this.props} className={classnames('dropdown', this.props.className)}>
                {this.props.children}
            </li>
        )
    }
}

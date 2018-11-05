/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class Row extends React.Component {

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    render() {
        return (
            <div className={classnames('row', this.props.className)}>{this.props.children}</div>
        )
    }
}

export class Col extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number
    };

    static defaultProps = {
        className: '',
        xs: null,
        sm: null,
        md: null,
        lg: null
    };

    render() {

        const {xs, sm, md, lg} = this.props;

        let _xs = xs ? `col-xs-${xs}` : '',
            _sm = sm ? `col-sm-${sm}` : '',
            _md = md ? `col-md-${md}` : '',
            _lg = lg ? `col-lg-${lg}` : '';

        return (
            <div className={classnames(_xs, _sm, _md, _lg, this.props.className)}>{this.props.children}</div>
        )
    }
}

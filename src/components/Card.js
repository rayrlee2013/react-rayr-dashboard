/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Thousandth from './number/Thousandth';
import Icon from './Icon';

export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        bg: PropTypes.string,
        icon: PropTypes.string,
        label: PropTypes.string,
        data: PropTypes.number
    };

    static defaultProps = {
        className: '',
        bg: 'aqua',
        icon: 'user',
        label: 'nothing',
        data: 0
    };

    render() {

        return (
            <div className={classnames('small-box', `bg-${this.props.bg}`, this.props.className)}>
                <div className="inner">
                    <h3><Thousandth>{this.props.data}</Thousandth></h3>
                    <p>{this.props.label}</p>
                </div>
                <div className="icon">
                    <Icon name={this.props.icon}/>
                </div>
                <a className="small-box-footer">More info <Icon name={'arrow-circle-right'}/></a>
            </div>
        )
    }
}

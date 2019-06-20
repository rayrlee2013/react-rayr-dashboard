/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React, {Children} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from "../Icon";

function Pane({isShow, children}) {
    return isShow ? <div style={{minHeight: 420}} className={classnames('tab-pane', {active: isShow})}>{children}</div> : null;
}

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            iNow: props.iNow
        };
    }

    static propTypes = {
        className: PropTypes.string,
        icon: PropTypes.string,
        iNow: PropTypes.number,
        onTab: PropTypes.func
    };

    static defaultProps = {
        className: '',
        iNow: 0,
        icon: '',
        func: null
    };

    static Pane = Pane;

    changeFn(index) {
        this.setState({
            iNow: index
        }, () => {
            this.props.onTab && this.props.onTab(index);
        });
    }

    render() {

        const {iNow} = this.state;
        const {icon, children, className, title} = this.props;

        return (
            <div className={classnames('nav-tabs-custom', className)}>
                <ul className={classnames('nav nav-tabs', {'pull-right': !!title})}>
                    {
                        children.map((item, index) => {
                            return (
                                <li key={index} className={classnames({'active': index === iNow})}
                                    onClick={this.changeFn.bind(this, index)}>
                                    <a>{item.props.name}</a>
                                </li>
                            );
                        })
                    }
                    {
                        !!title && (
                            <li className="pull-left header">
                                <Icon name={icon}/>{title}
                            </li>
                        )
                    }
                </ul>
                <div className="tab-content no-padding">
                    {
                        Children.map(children, (child, index) => {
                            return <child.type key={index} {...child.props} isShow={iNow === index}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

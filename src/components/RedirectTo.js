/**
 * Created by Rayr Lee on 2019-06-13.
 */

import React from 'react';
import {withRouter} from 'react-router';

@withRouter
export default class extends React.Component {
    render() {
        let _to = this.props.to || '/login';
        this.props.history.$push(_to);
        return null;
    }
}

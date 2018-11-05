/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

@withRouter
export default class extends Component {

    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
                </div>
                <strong>Copyright © 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
                reserved.
            </footer>
        )
    }
}


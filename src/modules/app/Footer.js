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
                    <b>Version</b> 1.0.0
                </div>
                <strong>Copyright © 2018-2020 <a>heibaizhu . laohei</a>.</strong> Fe developer
            </footer>
        )
    }
}


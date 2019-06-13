/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component} from 'react';

export default class extends Component {

    render() {
        return (
            <div className="error-page">
                <h2 className="headline text-yellow"> 404</h2>
                <div className="error-content">
                    <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>
                </div>
            </div>
        )
    }
}


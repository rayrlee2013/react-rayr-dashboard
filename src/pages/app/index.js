/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component, Fragment} from 'react';
import {Header, Siderbar, Footer} from './public';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Siderbar/>
                <div className="content-wrapper">

                </div>
                <Footer/>
            </Fragment>
        )
    }
}

/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component, Fragment} from 'react';
import {AuthLogin} from 'components';
import Header from './Header';
import Siderbar from './Siderbar';
import Footer from './Footer';
import Content from './Content';

@AuthLogin()
export default class extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Siderbar/>
                <Content {...this.props}/>
                <Footer/>
            </Fragment>
        )
    }
}

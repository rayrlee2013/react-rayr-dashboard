/**
 * Created by Rayr Lee on 2018/11/2.
 */

import React, {Component, Fragment} from 'react';
import Header from './Header';
import Siderbar from './Siderbar';
import Footer from './Footer';
import Content from './Content';

export default class extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Siderbar/>
                <Content/>
                <Footer/>
            </Fragment>
        )
    }
}

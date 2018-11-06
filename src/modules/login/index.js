/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React, {Component, Fragment} from 'react';
import {Input, Glyphicon, Row, Col, Switch, Btn} from 'components';

function Footer() {
    return (
        <div>
            <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i
                    className="fa fa-facebook"></i> Sign in using
                    Facebook</a>
                <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i
                    className="fa fa-google-plus"></i> Sign in using
                    Google+</a>
            </div>
            <a href="#">I forgot my password</a>
            <br/>
            <a href="register.html" className="text-center">Register a new membership</a>
        </div>
    )
}

export default class extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a><b>Admin</b>LTE</a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <div className="form-group has-feedback">
                            <Input type="email" placeholder="Email"/>
                            <Glyphicon name="envelope" className="form-control-feedback"/>
                        </div>
                        <div className="form-group has-feedback">
                            <Input type="email" placeholder="Password"/>
                            <Glyphicon name="lock" className="form-control-feedback"/>
                        </div>
                        <Row>
                            <Col xs={8}>
                                <Switch className="switch-btn">Remember Me</Switch>
                            </Col>
                            <Col xs={4}>
                                <Btn flat={true} type={'primary'} block={true}>Sign In</Btn>
                                {/*<button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>*/}
                            </Col>
                        </Row>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

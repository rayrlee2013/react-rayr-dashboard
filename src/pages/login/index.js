/**
 * Created by Rayr Lee on 2018/11/6.
 */

import React, {Component, Fragment} from 'react';
import md5 from 'md5';
import {Input, Glyphicon, Row, Col, Switch, Btn, Datafetch} from 'components';

const salt = (str, pass = 'nd387y29gl') => {
    return md5(str + pass);
};

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="social-auth-links text-center">
                    <p>- or -</p>
                    <a className="btn btn-block btn-social btn-facebook btn-flat">
                        <i className="fa fa-facebook"></i> Sign in using Facebook
                    </a>
                    <a className="btn btn-block btn-social btn-google btn-flat">
                        <i className="fa fa-google-plus"></i> Sign in using Google+
                    </a>
                </div>
            </div>
        )
    }
}

@Datafetch(props => ({
    postData: params => ({
        url: 'user/login',
        params: params
    })
}))
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
    }

    changeFn(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });

    }

    submitFn() {
        const {user, pwd} = this.state;
        this.props.postData({
            user: user,
            pwd: salt(pwd)
        });
    }

    render() {
        const {fetchStatus, data} = this.props;
        const {user, pwd} = this.state;
        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a><b>Admin</b>LTE {fetchStatus}</a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <div className="form-group has-feedback">
                            <Input placeholder="username" name="user" autocomplete="new-password" value={user}
                                   onChange={::this.changeFn}/>
                            <Glyphicon name="envelope" className="form-control-feedback"/>
                        </div>
                        <div className="form-group has-feedback">
                            <Input placeholder="password" name="pwd" autocomplete="new-password" type="password"
                                   value={pwd}
                                   onChange={::this.changeFn}/>
                            <Glyphicon name="lock" className="form-control-feedback"/>
                        </div>
                        <Row>
                            <Col xs={8}>
                                <Switch className="switch-btn">Remember Me</Switch>
                            </Col>
                            <Col xs={4}>
                                <Btn flat={true} type={'primary'} block={true} onClick={::this.submitFn}>Sign In</Btn>
                                {/*<button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>*/}
                            </Col>
                        </Row>
                        <Footer id={10}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

/**
 * Created by Rayr Lee on 2018/11/22.
 */

import React, {Component} from 'react';
import {Row, Col} from 'components';

import UserPanel from './UserPanel';
import About from './About';

export default () => {

    return (
        <Row>
            <Col md={12}>
                <UserPanel></UserPanel>
            </Col>
            <Col md={12}>
                <About></About>
            </Col>
        </Row>
    )
};

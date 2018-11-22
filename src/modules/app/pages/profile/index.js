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
            <Col md={3}>
                <UserPanel></UserPanel>
                <About></About>
            </Col>
            <Col md={9}>

            </Col>
        </Row>
    )
};

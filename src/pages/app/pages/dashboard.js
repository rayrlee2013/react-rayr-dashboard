/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component} from 'react';
import {Box, Row, Col} from 'components';

const {Header, Body} = Box;

export default () => {

    return (
        <Row>
            <Col md={12}>
                <Box widget={true}>
                    <Header border={true}>
                        <h3 className="box-title">Monthly Recap Report</h3>
                    </Header>
                    <Body>
                        Is this template really for free? That's unbelievable! 2018
                    </Body>
                </Box>
            </Col>
        </Row>
    )
};

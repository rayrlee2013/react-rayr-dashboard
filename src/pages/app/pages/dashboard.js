/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {Component, useState, useEffect} from 'react';
import {Box, Row, Col} from 'components';

const {Header, Body} = Box;

function getSize() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth
    };
}

function useWindowSize() {
    console.log(useState);
    let [windowSize, setWindowSize] = useState(getSize());

    function handleResize() {
        setWindowSize(getSize());
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}

export default () => {

    //const windowSize = useWindowSize();

    console.log(useState);

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

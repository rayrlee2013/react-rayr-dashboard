/**
 * Created by Rayr Lee on 2018/11/5.
 */

import React, {useState, useEffect} from 'react';
import {Box, Row, Col, Input} from 'components';

const {Header, Body} = Box;

function useAjax(value) {
    const [data, setData] = useState({});

    async function fetchData() {
        const response = await fetch('/api/tasks');
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchData(value)
    }, []);

    return data;
}

function useAdd(num) {
    let [data, updateData] = useState(0);

    useEffect(() => {
        updateData(data + Number(num));
        console.info('useAdd');
    }, [num]);

    return data;
}

function Example() {
    const [value, setValue] = useState(1);
    const [count, setCount] = useState(10);

    const result = useAdd(count);
    console.log(result);

    return (
        <div>
            <Input value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    )
}

export default () => {
    return (
        <Row>
            <Col md={12}>
                <Box widget={true}>
                    <Header border={true}>
                        <h3 className="box-title">组件元件</h3>
                    </Header>
                    <Body>
                        Is this template really for free? That's unbelievable!
                    </Body>
                </Box>
                <Box widget={true}>
                    <Header border={true}>
                        <h3 className="box-title">天气预报</h3>
                    </Header>
                    <Body>
                        <Example/>
                    </Body>
                </Box>
            </Col>
        </Row>
    )
};

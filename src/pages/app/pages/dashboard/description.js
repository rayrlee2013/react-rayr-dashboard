/**
 * Created by Rayr Lee on 2019/6/21.
 */

import React from 'react';
import {Row, Col, Icon} from "components";


export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    label: '产品设计目标',
                    done: 120,
                    total: 200,
                    type: 'aqua'
                },
                {
                    label: '目前总体开发进度',
                    done: 310,
                    total: 480,
                    type: 'red'
                },
                {
                    label: 'QA回归开发目标',
                    done: 480,
                    total: 800,
                    type: 'green'
                },
                {
                    label: '上线版本数量',
                    done: 490,
                    total: 500,
                    type: 'yellow'
                }
            ]
        }
    }

    render() {
        return (
            <Row className="row">
                <Col sm={3} xs={6}>
                    <div className="description-block border-right">
                        <span className="description-percentage text-green">
                            <Icon name="caret-up"/> 17%
                        </span>
                        <h5 className="description-header">$35,210.43</h5>
                        <span className="description-text">TOTAL REVENUE</span>
                    </div>
                </Col>
                <Col sm={3} xs={6}>
                    <div className="description-block border-right">
                        <span className="description-percentage text-green">
                            <Icon name="caret-up"/> 17%
                        </span>
                        <h5 className="description-header">$35,210.43</h5>
                        <span className="description-text">TOTAL REVENUE</span>
                    </div>
                </Col>
                <Col sm={3} xs={6}>
                    <div className="description-block border-right">
                        <span className="description-percentage text-green">
                            <Icon name="caret-up"/> 17%
                        </span>
                        <h5 className="description-header">$35,210.43</h5>
                        <span className="description-text">TOTAL REVENUE</span>
                    </div>
                </Col>
                <Col sm={3} xs={6}>
                    <div className="description-block border-right">
                        <span className="description-percentage text-green">
                            <Icon name="caret-up"/> 17%
                        </span>
                        <h5 className="description-header">$35,210.43</h5>
                        <span className="description-text">TOTAL REVENUE</span>
                    </div>
                </Col>
            </Row>
        )
    }
}

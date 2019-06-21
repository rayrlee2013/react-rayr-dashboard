/**
 * Created by Rayr Lee on 2019/6/21.
 */

import React from 'react';
import {Row, Col, Icon, Thousandth} from "components";

const statusConf = {
    '1': {
        type: 'up',
        color: 'green'
    },
    '2': {
        type: 'left',
        color: 'yellow'
    },
    '3': {
        type: 'down',
        color: 'red'
    }
}

function Item({data}) {
    return (
        <Col sm={3} xs={6}>
            <div className="description-block border-right">
                <span className={`description-percentage text-${statusConf[data.type].color}`}>
                    <Icon name={`caret-${statusConf[data.type].type}`}/> {data.percent}%
                </span>
                <h5 className="description-header">$<Thousandth>{data.money}</Thousandth></h5>
                <span className="description-text">{data.label}</span>
            </div>
        </Col>
    )
}


export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    label: 'TOTAL REVENUE',
                    percent: '17%',
                    money: 35210.43,
                    type: '1'
                },
                {
                    label: 'TOTAL COST',
                    percent: '0%',
                    money: 10390.90,
                    type: '2'
                },
                {
                    label: 'TOTAL PROFIT',
                    percent: '20%',
                    money: 24813.53,
                    type: '1'
                },
                {
                    label: 'GOAL COMPLETIONS',
                    percent: '18%',
                    money: 1200,
                    type: '3'
                }
            ]
        }
    }

    render() {
        return (
            <Row className="row">
                {
                    this.state.data.map((item, index)=> <Item data={item} key={index}/>)
                }
            </Row>
        )
    }
}

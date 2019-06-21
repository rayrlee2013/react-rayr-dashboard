/**
 * Created by Rayr Lee on 2019/6/21.
 */

import React, {Fragment} from 'react';
import {Progress} from 'chart';

function ProgressGroup({data}) {
    return (
        <div className="progress-group">
            <span className="progress-text">{data.label}</span>
            <span className="progress-number"><b>{data.done}</b>/{data.total}</span>
            <Progress type={data.type} value={data.done/data.total * 100}/>
        </div>
    )
}


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
            <Fragment>
                <p className="text-center">
                    <strong>开发目标完成度</strong>
                </p>
                {
                    this.state.data.map((item, index) => <ProgressGroup key={index} data={item}/>)
                }
            </Fragment>
        )
    }
}

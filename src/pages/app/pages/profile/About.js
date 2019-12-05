/**
 * Created by Rayr Lee on 2018/11/22.
 */

import React from 'react';
import {Box, Btn, Icon} from 'components';

export default class extends React.Component {
    render() {
        return (
            <Box type="primary">
                <Box.Header border={true}>
                    <h3 className="box-title">员工信息</h3>
                </Box.Header>
                <Box.Body>
                    <strong><Icon name="book" className={'margin-r-5'}/> 姓名</strong>
                    <p className="text-muted">黑白猪</p>
                    <hr/>
                    <strong><Icon name="map-marker" className={'margin-r-5'}/> 部门</strong>
                    <p className="text-muted">客服部</p>
                    <hr/>
                    <strong><Icon name="pencil" className={'margin-r-5'}/> 职位</strong>
                    <p className="text-muted">客服专员</p>
                    <hr/>
                    <strong><Icon name="file-text-o" className={'margin-r-5'}/> 电话</strong>
                    <p className="text-muted">18323424323</p>
                    <hr/>
                    <strong><Icon name="pencil" className={'margin-r-5'}/> 邮件</strong>
                    <p className="text-muted">客服专员</p>
                    <hr/>
                    <strong><Icon name="file-text-o" className={'margin-r-5'}/> 手机</strong>
                    <p className="text-muted">18323424323</p>
                    <hr/>
                    <strong><Icon name="pencil" className={'margin-r-5'}/> 性别</strong>
                    <p className="text-muted">客服专员</p>
                    <hr/>
                    <strong><Icon name="file-text-o" className={'margin-r-5'}/> 生日</strong>
                    <p className="text-muted">18323424323</p>
                    <hr/>
                </Box.Body>
            </Box>
        )
    }
}

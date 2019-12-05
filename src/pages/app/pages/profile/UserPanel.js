/**
 * Created by Rayr Lee on 2018/11/22.
 */

import React from 'react';
import {Box, Btn} from 'components';

export default class extends React.Component {
    render() {
        return (
            <Box type="primary">
                <Box.Body className={'box-profile'}>
                    <img className="profile-user-img img-responsive img-circle"
                         src="https://adminlte.io/themes/AdminLTE/dist/img/user4-128x128.jpg"/>
                    <h3 className="profile-username text-center">黑白猪</h3>
                    <p className="text-muted text-center">员工号：000001</p>
                </Box.Body>
            </Box>
        )
    }
}

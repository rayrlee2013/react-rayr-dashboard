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
                    <h3 className="profile-username text-center">Nina Mcintire</h3>
                    <p className="text-muted text-center">Software Engineer</p>
                    <ul className="list-group list-group-unbordered">
                        <li className="list-group-item">
                            <b>Followers</b> <a className="pull-right">1,322</a>
                        </li>
                        <li className="list-group-item">
                            <b>Following</b> <a className="pull-right">543</a>
                        </li>
                        <li className="list-group-item">
                            <b>Friends</b> <a className="pull-right">13,287</a>
                        </li>
                    </ul>
                    <Btn type={'primary'} block={true}>follow</Btn>
                </Box.Body>
            </Box>
        )
    }
}

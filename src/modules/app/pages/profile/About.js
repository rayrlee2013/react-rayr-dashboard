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
                    <h3 className="box-title">About Me</h3>
                </Box.Header>
                <Box.Body>
                    <strong><Icon name="book" className={'margin-r-5'}/> Education</strong>
                    <p className="text-muted">
                        B.S. in Computer Science from the University of Tennessee at Knoxville
                    </p>
                    <hr/>
                    <strong><Icon name="map-marker" className={'margin-r-5'}/> Location</strong>
                    <p className="text-muted">Malibu, California</p>
                    <hr/>
                    <strong><Icon name="pencil" className={'margin-r-5'}/> Skill</strong>
                    <p className="text-muted">
                        B.S. in Computer Science from the University of Tennessee at Knoxville
                    </p>
                    <hr/>
                    <strong><Icon name="file-text-o" className={'margin-r-5'}/> Notes</strong>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.
                    </p>
                    <hr/>
                </Box.Body>
            </Box>
        )
    }
}

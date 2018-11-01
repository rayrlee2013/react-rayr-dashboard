import './scss/index.scss';

import React from 'react';
import {render} from 'react-dom';
import {configure} from 'mobx';
import Auth from './Auth';

configure({
    isolateGlobalState: true
});

render(<Auth/>, document.getElementById('rias'));

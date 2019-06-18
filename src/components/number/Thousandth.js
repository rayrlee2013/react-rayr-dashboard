/**
 * Created by Rayr Lee on 2019/6/18.
 */

import React from 'react';

export default function (props) {
    let reg = /\d{1,3}(?=(\d{3})+$)/g;
    let num = (props.children + '').replace(reg, '$&,');
    return <>{num}</>
}

/**
 * Created by Rayr Lee on 2019/6/18.
 */

import React from 'react';

export default function (props) {

    if (typeof props.children !== 'number') {
        return <>请输入数字</>
    }

    let num = props.children + '';

    if (num.indexOf('.') === -1) num += '.';

    num = num.replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
        return $1 + ',';
    }).replace(/\.$/, '')

    return <>{num}</>
}

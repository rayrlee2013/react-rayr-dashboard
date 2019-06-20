/**
 * Created by Rayr Lee on 2018/12/3.
 */

import React from "react";
import {Loading} from 'components';

export default ({isLoading, error}) => {
    if (isLoading) {
        return <Loading>页面正在加载</Loading>;
    } else if (error) {
        return <div>😢~~，Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};

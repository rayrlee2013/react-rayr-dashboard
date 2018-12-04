/**
 * Created by Rayr Lee on 2018/12/3.
 */

var fs = require('fs');
var lazyLoaderTemp = fs.readFileSync('./conf/loader/tpl.js', 'utf-8');

console.log(lazyLoaderTemp);

return;

var importReg = /require(\S*)\(('|")lazy\|(\S*)('|")\)/g;
var line = "import React from 'react';\n" +
    "import {Route, Switch, Redirect} from 'react-router-dom';\n" +
    "\n" +
    "export default ({match}) => {\n" +
    "    return (\n" +
    "        <Switch>\n" +
    "            <Route path={`${match.url}/teachinfo/classroom`} component={require('lazy|./teachinfo/classroom/test/hfh/jgg')}/>\n" +
    "            <Route path={`${match.url}/teachinfo/courseNum`} component={require('lazy|./teachinfo/courseNum')}/>\n" +
    "            <Route path={`${match.url}/teachinfo/term`} component={require('lazy|./teachinfo/term')}/>\n" +
    "            <Route component={() => (\n" +
    "                <Redirect push to=\"/app/teachinfo/classroom\"/>\n" +
    "            )}/>\n" +
    "        </Switch>\n" +
    "    )\n" +
    "};";

var content = line.replace(importReg, function (str, name, a, url) {
    let chunkName = url;
    if (chunkName.startsWith('./')) {
        chunkName = chunkName.replace('./', '').replace(/\//g, '_');
    }
    return `((res) => import(/* webpackChunkName: "${chunkName}" */ '${url}').then(res))`;
});

console.log(content);

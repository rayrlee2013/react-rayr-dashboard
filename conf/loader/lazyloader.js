const fs = require('fs');
const path = require('path');
const loaderUtils = require('loader-utils');

const importReg = /require(\S*)\(('|")lazy\|(\S*)('|")\)/g;
const improtFlag = /\/\* COMPONENTS LAZY LOADER TEMPLATE \*\//;

let insertTemp = false;

module.exports = function (content) {

    if (!insertTemp) {
        insertTemp = true;
        content = 'import Loadable from "react-loadable";\n' + content + '\nwindow.Loadable = Loadable;';
    }

    if (!improtFlag.test(content)) {
        return content;
    }

    const {loading} = loaderUtils.getOptions(this);

    content = `import {${loading.name}} from '${loading.path}';\n${content}`;

    try {
        content = content.split('\n').map((line) => {
            return line.replace(importReg, function (str, name, a, url) {
                let chunkName = url;
                if (chunkName.startsWith('./')) {
                    chunkName = chunkName.replace('./', '').replace(/\//g, '_');
                }
                return `Loadable({loader: () => import(/* webpackChunkName: "${chunkName}" */ '${url}'), loading: ${loading.name}})`
            });
        });
    } catch (error) {
        console.error(error);
    }
    console.log(content.join('\n'));
    return content.join('\n');
}

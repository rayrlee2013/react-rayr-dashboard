/**
 * Created by Rayr Lee on 2017/3/14.
 */

const path = require('path');
const APPATH = require('./config').path.APPPATH;

module.exports = {
    services: path.resolve(__dirname, APPATH + 'services'),
    components: path.resolve(__dirname, APPATH + 'components'),
    stores: path.resolve(__dirname, APPATH + 'stores'),
    rayr: path.resolve(__dirname, APPATH + 'rayr'),
}

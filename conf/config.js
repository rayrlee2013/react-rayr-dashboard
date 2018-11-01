/**
 * Created by Rayr Lee on 2016/6/2.
 */

module.exports = {
    path: {
        APPPATH: '../src/'
    },
    server: {
        'target': '60.205.213.209:9000'
    },
    static_dir: ['js', 'css', 'img', 'fonts'],
    proxyConf: {
        changeOrigin: false
    }
}

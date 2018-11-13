/**
 * Created by Rayr Lee on 2018/11/9.
 */

export default {
    target: 'https://api.github.com',
    changeOrigin: true,
    pathRewrite: {
        '^/github': '/'
    }
}

/**
 * Created by Rayr Lee on 2018/4/17.
 */

import url from 'url';
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import http from 'http';
import proxy from 'http-proxy-middleware';
import compression from 'compression';
import chalk from 'chalk';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../conf/webpack.dev';

const helper = require('./helper');
const CONFIG = require('../conf/config');
const {log} = console;

const TARGET = helper.findArg('target') || CONFIG.server.target;
const PORT = Number(helper.findArg('port')) || 8021;
const HOST = helper.findArg('host') || '127.0.0.1';

const devURL = `http://${HOST}:${PORT}`;

const urlParts = url.parse(devURL);

const compiler = webpack(webpackConfig);

const app = express();

app.use(compression());
app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: false,
        version: false,
        cached: false,
        cachedAssets: false,
        reasons: false,
        source: false,
        errorDetails: false
    }
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (error, result) => {
        if (error) {
            next(error);
        } else {
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        }
    });
});

const server = http.createServer(app);
//服务器
server.listen(urlParts.port, () => {
    log(chalk.cyan(`本地编译服务器启动：${devURL}`));
});

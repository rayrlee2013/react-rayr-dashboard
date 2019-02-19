/**
 * Created by Rayr Lee on 2018/4/17.
 */

import url from 'url';
import express from 'express';
import path from 'path';
import http from 'http';
import fs from 'fs';
import proxy from 'http-proxy-middleware';
import compression from 'compression';
import mockMiddleware from "./mock";

const HELPER = require('./helper');
const CONFIG = require('../conf/config');

const TARGET = HELPER.findArg('target') || CONFIG.server.target;
const PORT = Number(HELPER.findArg('port')) || 13001;
const HOST = HELPER.findArg('host') || '127.0.0.1';

const devURL = `http://${HOST}:${PORT}`;

const urlParts = url.parse(devURL);

const app = express();
//gzip
app.use(compression());
app.use(require('./middleware/output'));

CONFIG.static_dir.map((item) => {
    app.use(`/${item}`, express.static(path.join('build', item)));
});

app.use('/iot', proxy({
    target: 'http://10.109.0.59:10000',
    changeOrigin: true
}));

mockMiddleware(app);

app.use('*', (req, res, next) => {
    fs.readFile('./build/index.html', (err, data) => {
        if (err) {
            next(err);
        } else {
            res.set('content-type', 'text/html');
            res.send(data);
            res.end();
        }
    });
});

let server = http.createServer(app);

server.listen(urlParts.port, () => {
    console.log(`Listening at ${devURL}`);
});

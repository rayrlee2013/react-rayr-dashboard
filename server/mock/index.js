/**
 * Created by Rayr Lee on 2018/11/6.
 */

export default function (app) {
    app.get('/api/userinfo', (req, res) => {
        res.apiSuccess(require('./userinfo'));
    });

    app.get('/api/messages', (req, res) => {
        res.apiSuccess(require('./messages'));
    });

    app.get('/api/notifications', (req, res) => {
        res.apiSuccess(require('./notifications'));
    });

    app.get('/api/tasks', (req, res) => {
        res.apiSuccess(require('./tasks'));
    });
};

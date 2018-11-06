/**
 * Created by Rayr Lee on 2018/11/6.
 */

export default function (app) {
    app.get('/api/userinfo', (req, res) => {
        res.apiSuccess({
            name: 'Alexander Pierce',
            job: 'Web Developer',
            date: 'Member since Nov. 2012',
            avatar: 'https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg',
            status: 1
        });
    });
};

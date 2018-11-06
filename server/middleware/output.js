/**
 * Created by Rayr Lee on 2018/8/21.
 */

export default function (req, res, next) {

    res.apiSuccess = (data) => {
        res.status(200).send({
            errno: 100000,
            data: data
        });
    };

    res.apiError = (errmsg, errno = 100001) => {
        res.status(200).send({
            errno,
            errmsg: errmsg.toString() || 'UNKNOW',
            data: null
        });
    };

    next();
}
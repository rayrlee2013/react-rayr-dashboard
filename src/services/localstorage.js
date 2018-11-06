/**
 * Created by Rayr Lee on 2017/12/18.
 */

export default {
    get(k) {
        return window.localStorage.getItem(`RAYR_${k}`);
    },
    set(k, v) {
        window.localStorage.setItem(`RAYR_${k}`, v);
    },
    delete(k) {
        window.localStorage.removeItem(`RAYR_${k}`);
    }
}

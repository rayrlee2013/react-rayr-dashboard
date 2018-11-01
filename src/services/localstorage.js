/**
 * Created by Rayr Lee on 2017/12/18.
 */

export default {
    get(k) {
        return window.localStorage.getItem(`rayr_${k}`);
    },
    set(k, v) {
        window.localStorage.setItem(`rayr_${k}`, v);
    },
    delete(k) {
        window.localStorage.removeItem(`rayr_${k}`);
    }
}

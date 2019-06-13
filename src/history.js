import {createBrowserHistory} from 'history/cjs/history';
import qs from 'query-string';
import {$_url} from 'services';

function init(h) {
    const {pathname, search} = h.location;
    h.location = {...h.location, query: qs.parse(search, {ignoreQueryPrefix: true})};

    h.$push = (path, obj) => {
        let _o = {};
        path = path || pathname;
        if (obj) {
            Object.assign(_o, $_url.unInit(search), obj);
        }
        h.push(`${path}${$_url.init(_o)}`);
    };

    h.$reload = () => {
        h.push(pathname + search);
    };
};

const history = createBrowserHistory({
    basename: '/'
});

init(history);

history.listen(() => {
    init(history);
});

export default history;

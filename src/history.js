import createBrowserHistory from 'history/createBrowserHistory';
import qs from 'query-string';

function init(h) {
    const {pathname, search} = h.location;
    h.location = {...h.location, query: qs.parse(search, {ignoreQueryPrefix: true})};
};

const history = createBrowserHistory({
    basename: '/'
});

init(history);

history.listen(() => {
    init(history);
});

export default history;

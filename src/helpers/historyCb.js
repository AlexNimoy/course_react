import { matchPath } from 'react-router-dom';
import { parse } from 'qs';

import store from '~/src/store';
import routes from '~/src/routes';

import prepareData from '~/src/helpers/prepareData';

const historyCb = (location, action = 'PUSH') => {
  const state = { params: {}, query: {}, routes: [] }

  routes.some((route) => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.substr(1)));
    }

    return match;
  });

  prepareData(store, state);
}

export default historyCb;

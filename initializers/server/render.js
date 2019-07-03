import React from 'react';

import { renderToString } from 'react-dom/server';

import store from 'store';

import App from 'components/App';
import historyCb from 'helpers/historyCb';

export default (req, res) => {
  return historyCb({ pathname: req.url, query: req.query })
    .then(() => {
      const context = {};
      return {
        content: renderToString(<App location={req.url} context={context} />),
        initialState: store.getState()
      };
    });
};

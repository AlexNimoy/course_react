import React from 'react';

import { renderToString } from 'react-dom/server';

import store from 'store';

import App from 'components/App';
import historyCb from 'helpers/historyCb';

import Helmet from 'react-helmet';

export default (req, res) => {
  return historyCb({ pathname: req.url, query: req.query })
    .then(() => {
      const context = {};
      return {
        content: renderToString(<App store={store} location={req.url} context={context} />),
        initialState: store.getState(),
        helmet: Helmet.renderStatic(),
        context: context
      };
    });
};

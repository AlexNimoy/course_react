import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';
import fetchRepos from './src/Github';

const render = async () => {
  const repos = await fetchRepos();

  return ReactDOMServer.renderToString(<App repos={repos} />);
}

export default render;

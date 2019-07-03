import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import history from 'helpers/history';
import historyCb from 'helpers/historyCb';
import store from 'store';

history.listen(historyCb);
historyCb(window.location);

ReactDOM.render(
  <App history={ history } store={ store } />,
  document.getElementById('root')
)

import NotFound from 'components/pages/NotFound';
import React from 'react';

export default {
  path: "*",
  render: (context) => {
    context.status = 404;
    return <NotFound />;
  },
  exact: true
}

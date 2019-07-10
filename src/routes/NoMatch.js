import NotFound from 'components/pages/NotFound';
import React from 'react';

export default {
  path: "*",
  render: ({ staticContext }) => {
    staticContext.status = 404;
    return <NotFound />;
  },
  exact: true
}

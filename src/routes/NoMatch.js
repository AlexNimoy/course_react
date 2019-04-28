import React from 'react';

export default {
  render: ({ staticContext  }) => {
    if(staticContext) {
      staticContext.status = 404;
    }
    return <div>404 Not found</div>;
  }
}

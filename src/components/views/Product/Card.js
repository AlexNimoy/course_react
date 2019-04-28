import React from 'react';

import { withRouter } from 'react-router-dom';

const Card = ({ match, location }) => (
  <div>{ match.params.id } - { location.pathname }</div>
);

export default withRouter(Card);

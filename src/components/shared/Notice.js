import React from 'react';
import PropTypes from 'prop-types';

const Notice = ({ children }) => (
  (children) ? <div className='notice'>{ children }</div> : null
)

Notice.propTypes = {
  children: PropTypes.string
}

export default Notice;

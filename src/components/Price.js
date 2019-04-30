import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ children }) => (
  <div className='money'>
    { children }
    <span className='currency'>
      &#8381;
    </span>
  </div>
);

Price.propTypes = {
  children: PropTypes.number.isRequired
}

export default Price;

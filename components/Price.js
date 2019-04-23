import React from 'react';

const Price = ({ money }) => (
  <div className='money'>
    { money }
    <span className='currency'>
      &#8381;
    </span>
  </div>
);

export default Price;

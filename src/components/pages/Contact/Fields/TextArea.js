import React from 'react';
import classNames from 'classnames';

const TextArea = ({ name, value, onChange, label }) => (
  <div className='ui field'>
    <label htmlFor={ name }>{ label }</label>
    <textarea
      name={ name }
      id={ name }
      className='ui field'
      value={ value }
      onChange={ onChange }
    />
  </div>
);

export default TextArea;

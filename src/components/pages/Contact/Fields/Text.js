import React from 'react';
import classNames from 'classnames';

const Text = ({ name, value, onChange, label, error }) => (
  <div className={ classNames('ui field', { error }) }>
    <label htmlFor={ name }>{ label }</label>
    <input
      name={ name }
      id={ name }
      className='ui field'
      type='text'
      value={ value }
      onChange={ onChange }
    />
  </div>
);

export default Text;

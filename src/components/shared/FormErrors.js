import React from 'react';

const FormErrors = ({ errors, touched, fieldName }) => {
  if(errors[fieldName] && touched[fieldName]) {
    return(
      <div className='error'>
        { errors[fieldName] }
      </div>
    );
  }

  return null;
}

export default FormErrors;

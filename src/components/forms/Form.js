import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  onSubmit,
  children
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired
}

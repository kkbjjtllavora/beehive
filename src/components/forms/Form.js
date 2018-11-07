import React from 'react';
import PropTypes from 'prop-types';

export default function Form({
  onSubmit,
  children
}) {
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

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired
}

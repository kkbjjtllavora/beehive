import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Label from 'components/forms/Label';

const INPUT_WRAP_CONTAINER_STYLE = {
  boxSizing: 'border-box',
  marginBottom: '12px',
  position: 'relative',
  width: '100%',
}

const VALIDATION_CHECK_STYLE = {
  background: '#e74c3c',
  borderRadius: '50%',
  color: '#fff',
  fontWeight: 'bold',
  padding: '0px 11px 1px',
  position: 'absolute',
  right: '8px',
}

const s = StyleSheet.create({
  inputWrapContainer:   INPUT_WRAP_CONTAINER_STYLE,
  validationCheck:      VALIDATION_CHECK_STYLE,
});

export default function FieldWrap({
  children,
  label,
  valid,
  touched,
}) {
  const renderLabel = (label) =>
    <Label>{label}</Label>;

  const renderCheck = () => 
    <span 
      className={css(s.validationCheck)}
      style={{ top: !label ? '5px' : '22px' }}
    >!</span>

  return (
    <div className={css(s.inputWrapContainer)}>
      { label && renderLabel(label) }

      { touched && (!valid && renderCheck()) }      

      { children }
    </div>
  )
}

FieldWrap.defaultProps = {
  label: ''
}

FieldWrap.propTypes = {
  children:   PropTypes.node.isRequired,
  label:      PropTypes.string,
  valid:      PropTypes.bool,
  touched:    PropTypes.bool,
}

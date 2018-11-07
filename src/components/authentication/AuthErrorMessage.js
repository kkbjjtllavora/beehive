import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function AuthErrorMessage({
  errMsg
}) {
  return (
    <p className={css(s.errorContainer)}>
      { errMsg ? errMsg :null }
    </p>
  )
}

const ERROR_CONTAINER_STYLE = {
  color: '#e74c3c',
  fontSize: '14px',
  margin: '0 auto 15px',
  textAlign: 'center',
  width: '70%',
  display: 'block',
  boxSizing: 'border-box',
}

const s = StyleSheet.create({
  errorContainer: ERROR_CONTAINER_STYLE,
});

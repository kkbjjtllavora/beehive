import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';

export const DEFAULT_LABEL = 'default';
export const LOGIN_LABEL   = 'login-label';

const BASE_STYLE = {
  color: '#555',
  display: 'block',
  font: "700 13px 'Lato', sans-serif",
  fontSize: '12px',
  fontWeight: 'normal',
}

const LOGIN_LABEL_STYLE = {
  ...BASE_STYLE,
  color: '#3498db',
  float: 'left',
  fontSize: '12px',
  marginBottom: '7px',
  marginLeft: '4px',
}

const DEFAULT_STYLE = {
  ...BASE_STYLE,
  fontWeight: 'bold',
  marginBottom: '2px',
}

const s = StyleSheet.create({
  [DEFAULT_LABEL]: DEFAULT_STYLE,
  [LOGIN_LABEL]:   LOGIN_LABEL_STYLE
});

export default function Label({
  children,
  variety = DEFAULT_LABEL
}) {
  return (
    <label className={css(s[variety])}>
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  variety: PropTypes.oneOf([
    DEFAULT_LABEL,
    LOGIN_LABEL
  ])
}

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

export const DEFAULT_BUTTON     = 'default';
export const LOGIN_BUTTON       = 'login-button';
export const MEMBER_BUTTON      = 'member-button';
export const INVESTMENT_BUTTON  = 'investment-button';

const BASE_STYLE = {
  background: '#2c3e50',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '12px',
  textAlign: 'center',
}

const DEFAULT_STYLE = {
  ...BASE_STYLE,
  padding: '10px 40px',
  textTransform: 'uppercase',

  ':disabled': {
    backgroundColor: '#AC9980',
    color: '#ccc',
    cursor: 'default',
  },

  ':hover:disabled': {
    backgroundColor: '#AC9980',
    color: '#ccc',
    cursor: 'not-allowed',
  }
}

const LOGIN_BUTTON_STYLE = {
  ...DEFAULT_STYLE,
  background: '#f1c40f',
  boxSizing: 'border-box',
  marginBottom: '10px',
  padding: '12px 0',
  textTransform: 'uppercase',
  width: '100%',

  ':hover': {
    background: '#f39c12',
  }
}

const MEMBER_BUTTON_STYLE = {
  ...DEFAULT_STYLE,
  marginTop: '14px',
  width: '100%',

  ':hover': {
    backgroundColor: '#34495e',
  }
}

const INVESTMENT_BUTTON_STYLE = {
  ...LOGIN_BUTTON_STYLE,
  backgroundColor: '#3498db',
  borderRadius: '8px',
  fontSize: '13px',
  padding: '10px 0',

  ':hover': {
    backgroundColor: '#2980b9',
  }
}

const s = StyleSheet.create({
  [DEFAULT_BUTTON]:       DEFAULT_STYLE,
  [LOGIN_BUTTON]:         LOGIN_BUTTON_STYLE,
  [MEMBER_BUTTON]:        MEMBER_BUTTON_STYLE,
  [INVESTMENT_BUTTON]:    INVESTMENT_BUTTON_STYLE,
});

const Button = ({
  children,
  onClick,
  variety = DEFAULT_BUTTON,
  ...rest 
}) => {
  return (
    <button 
      className={css(s[variety])}
      onClick={onClick} 
      {...rest}>
        {children}
    </button>
  )
}

export default Button;

Button.propTypes = {
  children:   PropTypes.any.isRequired,
  onClick:    PropTypes.func,
  variety:    PropTypes.oneOf([
                DEFAULT_BUTTON,
                LOGIN_BUTTON,
                MEMBER_BUTTON,
                INVESTMENT_BUTTON
              ]),
  autofocus:  PropTypes.bool,
  disabled:   PropTypes.bool,
  name:       PropTypes.string,
  type:       PropTypes.oneOf([
                "button",
                "submit",
                "reset"
              ]),
  value:      PropTypes.string
}

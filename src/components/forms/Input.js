import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

export const DEFAULT_INPUT = 'default';
export const LOGIN_INPUT   = 'login-input';
export const MEMBER_INPUT  = 'member-input';

const Input = ({
  onChange,
  variety = DEFAULT_INPUT,
  ...rest
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  }  

  return (
    <input 
      {...rest}
      className={css(s[variety])}
      onChange={handleChange} />
  )
}

export default Input;

Input.defaultProps = {
  name:           '',
  placeholder:    '',
  type:           'text',
  value:          '',
  variety:        DEFAULT_INPUT,
}

const INPUT_TYPE_NAMES = [
  "button",
  "checkbox",
  "color",
  "date", 
  "datetime-local", 
  "email", 
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
]

Input.propTypes = {
  accept:       PropTypes.string,
  checked:      PropTypes.bool,
  autoFocus:    PropTypes.bool,
  disabled:     PropTypes.bool,
  placeholder:  PropTypes.string,
  required:     PropTypes.bool,
  type:         PropTypes.oneOf(INPUT_TYPE_NAMES),
  value:        PropTypes.string,
  variety:      PropTypes.oneOf([
                  DEFAULT_INPUT,
                  LOGIN_INPUT,
                  MEMBER_INPUT,
                ]),
}

const DEFAULT_STYLE = {
  background: '#ecf0f1',
  fontSize: '14px',
  padding: '7px 40px 7px 20px',
  boxSizing: 'border-box',
  width: '100%',
}

const LOGIN_INPUT_STYLE = {
  ...DEFAULT_STYLE,
  marginBottom: '10px',
  padding: '10px 20px',
}

const MEMBER_INPUT_STYLE = {
  ...DEFAULT_STYLE,
  border: '1px solid rgb(212, 221, 227)',
}

const s = StyleSheet.create({
  [DEFAULT_INPUT]:    DEFAULT_STYLE,
  [LOGIN_INPUT]:      LOGIN_INPUT_STYLE,
  [MEMBER_INPUT]:     MEMBER_INPUT_STYLE,
});

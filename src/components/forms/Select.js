import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

export const DEFAULT_SELECT = 'default';
export const MEMBER_SELECT  = 'member-select';

const DEFAULT_SELECT_STYLE = {
  background: '#ecf0f1',
  cursor: 'pointer',
  fontSize: '12px',
  '-moz-appearance': 'none',
  '-webkit-appearance': 'none',

  '::-ms-expand': {
      display: 'none',
  }
}

const MEMBER_SELECT_STYLE = {
  ...DEFAULT_SELECT_STYLE,
  padding: '8px 20px',
  border: '1px solid rgb(212, 221, 227)',
  width: '100%',
}

const s = StyleSheet.create({
  [DEFAULT_SELECT]: DEFAULT_SELECT_STYLE,
  [MEMBER_SELECT]:  MEMBER_SELECT_STYLE,
});

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange.bind(this)
  }
  
  handleOnChange = (e) => {
    const value = e.target.value;
    const name  = e.target.name;

    this.props.onChange({ [name]: value });
  }

  render() {
    const { children, variety, ...rest } = this.props;

    return (
      <select 
        {...rest}
        className={css(s[variety])}
        onChange={this.handleOnChange}>
          { children }
      </select>
    )
  }
}

Select.defaultProps = {
  multiple:  false,
  name:      '',
  variety:   DEFAULT_SELECT,
}

Select.propTypes = {
  autoFocus: PropTypes.bool,
  children:  PropTypes.node.isRequired,
  disabled:  PropTypes.bool,
  multiple:  PropTypes.bool,
  name:      PropTypes.string,
  onChange:  PropTypes.func,
  required:  PropTypes.bool,
  variety:   PropTypes.oneOf([
    DEFAULT_SELECT,
    MEMBER_SELECT
  ]),
}

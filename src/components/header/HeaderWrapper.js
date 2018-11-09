import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const HEADER_WRAPPER_STYLE = {
  background: '#2c3e50',
  color: '#ecf0f1',
  width: '100%',
  padding: '0 25px',
  height: '60px',
  lineHeight: '60px',
  boxSizing: 'border-box',
}

const s = StyleSheet.create({
  headerWrapper: HEADER_WRAPPER_STYLE,
});

const HeaderContainer = ({
  children
}) => {
  return (
    <header className={css(s.headerWrapper)}>
      { children }
    </header>
  )
}

export default HeaderContainer;

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired
}

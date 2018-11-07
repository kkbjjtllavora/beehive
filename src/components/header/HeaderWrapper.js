import React from 'react';
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

export default function HeaderContainer({
  children
}) {
  return (
    <header className={css(s.headerWrapper)}>
      { children }
    </header>
  )
}

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const CLEARFIX_STYLE = {
  clear: 'both',
  content: '',
  display: 'block',
}

const s = StyleSheet.create({
  clearfix: CLEARFIX_STYLE
});

export default function ClearfixBox({ 
  children
}) {
  return (
    <div className={css(s.clearfix)}>
      {children}
    </div>
  )
}

ClearfixBox.propTypes = {
  children: PropTypes.node
}

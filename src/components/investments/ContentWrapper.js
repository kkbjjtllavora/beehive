import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const CONTENT_CONTAINER_STYLE = {
  width: '50%',
  boxSizing: 'border-box',
  float: 'left',
}

const CONTENT_WRAPPER_STYLE = {
  boxSizing: 'border-box',
  color: '#636e72',
  margin: '0 12px',
  backgroundColor: '#ecf0f1',
  padding: '20px',
}

const s = StyleSheet.create({
  contentContainer:   CONTENT_CONTAINER_STYLE,  
  contentWrapper:     CONTENT_WRAPPER_STYLE,  
});

export default function ContentWrapper({
  children
}) {
  return (
    <div className={css(s.contentContainer)}>
      <div className={css(s.contentWrapper)}>
        { children }
      </div>
    </div>
  )
}

import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

const BACKDROP_CONTAINER_STYLE = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  background: 'rgba(0,0,0,0)',
  zIndex: '99',
}

const s = StyleSheet.create({
  backdropContainer: BACKDROP_CONTAINER_STYLE,
});

export default function Backdrop({
  onClick,
  isOpen
}) {
  return isOpen ? (
      <div 
        className={css(s.backdropContainer)} 
        onClick={onClick}></div>
    ): null
  
}

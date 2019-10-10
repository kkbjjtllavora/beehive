import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite/no-important';

const s = StyleSheet.create({
  backdropContainer: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    background: 'rgba(0,0,0,0)',
    zIndex: '99',
  },
});

const Backdrop = ({
  onClick,
  isOpen
}) => {
  const backdrop = <div className={css(s.backdropContainer)} 
                        onClick={onClick}>
                   </div>

  return isOpen ? backdrop : null;
}

export default Backdrop;

Backdrop.propTypes = {
  onClick: PropTypes.func,
  isOpen:  PropTypes.bool
}

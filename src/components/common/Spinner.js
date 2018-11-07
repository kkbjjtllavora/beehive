import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

export const SPINNER_A = 'spinner-A';
export const SPINNER_B = 'spinner-B';

const SPINNER_A_KEYFRAME = {
  '0%': { transform: 'rotate(0deg)', },
  '100%': { transform: 'rotate(360deg)', },
}

const SPINNER_A_CONTAINER_STYLE = {
  fontSize: '10px',
  margin: '50px auto',
  textIndent: '-9999em',
  width: '6em',
  height: '6em',
  borderRadius: '50%',
  background: 'linear-gradient(to right, #34495e 10%, rgba(255, 255, 255, 0) 42%)',
  position: 'relative',
  animationName: SPINNER_A_KEYFRAME,
  animationDuration: '.1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  transform: 'translateZ(0)',

  ':before': {
    width: '50%',
    height: '50%',
    background: '#34495e',
    borderRadius: '100% 0 0 0',
    position: 'absolute',
    top: '0',
    left: '0',
    content: '""',
  },

  ':after': {
    background: '#fff',
    width: '75%',
    height: '75%',
    borderRadius: '50%',
    content: '""',
    margin: 'auto',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  },
}

const SPINNER_B_KEYFRAME = {
  '0%': {
    boxShadow: '0em -2.6em 0em 0em #6a6a6a, 1.8em -1.8em 0 0em rgba(106,106,106, 0.2), 2.5em 0em 0 0em rgba(106,106,106, 0.2), 1.75em 1.75em 0 0em rgba(106,106,106, 0.2), 0em 2.5em 0 0em rgba(106,106,106, 0.2), -1.8em 1.8em 0 0em rgba(106,106,106, 0.2), -2.6em 0em 0 0em rgba(106,106,106, 0.5), -1.8em -1.8em 0 0em rgba(106,106,106, 0.7)',
  },
  '100%': {
    boxShadow: '0em -2.6em 0em 0em #6a6a6a, 1.8em -1.8em 0 0em rgba(106,106,106, 0.2), 2.5em 0em 0 0em rgba(106,106,106, 0.2), 1.75em 1.75em 0 0em rgba(106,106,106, 0.2), 0em 2.5em 0 0em rgba(106,106,106, 0.2), -1.8em 1.8em 0 0em rgba(106,106,106, 0.2), -2.6em 0em 0 0em rgba(106,106,106, 0.5), -1.8em -1.8em 0 0em rgba(106,106,106, 0.7)',
  },
  '12.5%': {
    boxShadow: '0em -2.6em 0em 0em rgba(106,106,106, 0.7), 1.8em -1.8em 0 0em #6a6a6a, 2.5em 0em 0 0em rgba(106,106,106, 0.2), 1.75em 1.75em 0 0em rgba(106,106,106, 0.2), 0em 2.5em 0 0em rgba(106,106,106, 0.2), -1.8em 1.8em 0 0em rgba(106,106,106, 0.2), -2.6em 0em 0 0em rgba(106,106,106, 0.2), -1.8em -1.8em 0 0em rgba(106,106,106, 0.5)',
  },
  '25%': {
    boxShadow: '0em -2.6em 0em 0em rgba(106,106,106, 0.5), 1.8em -1.8em 0 0em rgba(106,106,106, 0.7), 2.5em 0em 0 0em #6a6a6a, 1.75em 1.75em 0 0em rgba(106,106,106, 0.2), 0em 2.5em 0 0em rgba(106,106,106, 0.2), -1.8em 1.8em 0 0em rgba(106,106,106, 0.2), -2.6em 0em 0 0em rgba(106,106,106, 0.2), -1.8em -1.8em 0 0em rgba(106,106,106, 0.2)',
  },
  '37.5%': {
    boxShadow: '0em -2.6em 0em 0em rgba(106,106,106, 0.2), 1.8em -1.8em 0 0em rgba(106,106,106, 0.5), 2.5em 0em 0 0em rgba(106,106,106, 0.7), 1.75em 1.75em 0 0em #6a6a6a, 0em 2.5em 0 0em rgba(106,106,106, 0.2), -1.8em 1.8em 0 0em rgba(106,106,106, 0.2), -2.6em 0em 0 0em rgba(106,106,106, 0.2), -1.8em -1.8em 0 0em rgba(106,106,106, 0.2)',
  },
  '50%': {
    boxShadow: '0em -2.6em 0em 0em rgba(106,106,106, 0.2), 1.8em -1.8em 0 0em rgba(106,106,106, 0.2), 2.5em 0em 0 0em rgba(106,106,106, 0.5), 1.75em 1.75em 0 0em rgba(106,106,106, 0.7), 0em 2.5em 0 0em #6a6a6a, -1.8em 1.8em 0 0em rgba(106,106,106, 0.2), -2.6em 0em 0 0em rgba(106,106,106, 0.2), -1.8em -1.8em 0 0em rgba(106,106,106, 0.2)',
  },
  '62.5%': {
    boxShadow: '0em -2.6em 0em 0em rgba(106,106,106, 0.2), 1.8em -1.8em 0 0em rgba(106,106,106, 0.2), 2.5em 0em 0 0em rgba(106,106,106, 0.2), 1.75em 1.75em 0 0em rgba(106,106,106, 0.5), 0em 2.5em 0 0em rgba(106,106,106, 0.7), -1.8em 1.8em 0 0em #6a6a6a, -2.6em 0em 0 0em rgba(106,106,106, 0.2), -1.8em -1.8em 0 0em rgba(106,106,106, 0.2)',
  },
  '75%': {
    boxShadow: '0em -2.6em 0em 0em rgba(106,106,106, 0.2), 1.8em -1.8em 0 0em rgba(106,106,106, 0.2), 2.5em 0em 0 0em rgba(106,106,106, 0.2), 1.75em 1.75em 0 0em rgba(106,106,106, 0.2), 0em 2.5em 0 0em rgba(106,106,106, 0.5), -1.8em 1.8em 0 0em rgba(106,106,106, 0.7), -2.6em 0em 0 0em #6a6a6a, -1.8em -1.8em 0 0em rgba(106,106,106, 0.2)',
  },
  '87.5%': {
    boxShadow: '0em -2.6em 0em 0em rgba(106,106,106, 0.2), 1.8em -1.8em 0 0em rgba(106,106,106, 0.2), 2.5em 0em 0 0em rgba(106,106,106, 0.2), 1.75em 1.75em 0 0em rgba(106,106,106, 0.2), 0em 2.5em 0 0em rgba(106,106,106, 0.2), -1.8em 1.8em 0 0em rgba(106,106,106, 0.5), -2.6em 0em 0 0em rgba(106,106,106, 0.7), -1.8em -1.8em 0 0em #6a6a6a',
  },
}

const SPINNER_B_CONTAINER_STYLE = {
  margin: '100px auto',
  fontSize: '10px',
  width: '1em',
  height: '1em',
  borderRadius: '50%',
  position: 'relative',
  textIndent: '-9999em',
  animationName: SPINNER_B_KEYFRAME,
  animationDuration: '1.1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease',
  transform: 'translateZ(0)',
}

const s = StyleSheet.create({
  [SPINNER_A]: SPINNER_A_CONTAINER_STYLE,
  [SPINNER_B]: SPINNER_B_CONTAINER_STYLE,
});

export default function Spinner({
  variant = SPINNER_B,
}) {
  return (
    <div className={css(s[variant])}>
      Loading...
    </div>
  )
}

Spinner.propTypes = {
  variant: PropTypes.oneOf([
    SPINNER_A,
    SPINNER_B,
  ]),
}

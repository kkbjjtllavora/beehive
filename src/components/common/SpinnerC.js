import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const SPINNER_KEYFRAME_STYLE = {
  '0%': { boxShadow: '0 1.5em 0 -1.5em', },
  '40%': { boxShadow: '0 1.5em 0 0', },
  '80%': { boxShadow: '0 1.5em 0 -1.5em', },
  '100%': { boxShadow: '0 1.5em 0 -1.5em', },
}

const SPINNER_BASE_STYLE = {
  borderRadius: '50%',
  width: '1.5em',
  height: '1.5em',
  animationFillMode: 'both',
  animationName: SPINNER_KEYFRAME_STYLE,
  animationDuration: '1.8s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
}

const SPINNER_BEFORE_AFTER_STYLE = {
  content: '""',
  position: 'absolute',
  top: '0',
}

const SPINNER_CONTAINER_STYLE = {
  ...SPINNER_BASE_STYLE,
  color: '#808080',
  fontSize: '1px',
  margin: '-20px auto -13px',
  position: 'relative',
  textIndent: '-9999em',
  transform: 'translateZ(0)',
  animationDelay: '-0.16s',

  ':before': {
    ...SPINNER_BASE_STYLE,
    ...SPINNER_BEFORE_AFTER_STYLE,
    left: '-3.5em',
    animationDelay: '-0.32s',
  },

  ':after': {
    ...SPINNER_BASE_STYLE,
    ...SPINNER_BEFORE_AFTER_STYLE,
    left: '3.5em',
  }
}

const s = StyleSheet.create({
  spinnerContainer: SPINNER_CONTAINER_STYLE,
});

export default function SpinnerC() {
  return (
    <div className={css(s.spinnerContainer)}>
      Loading...
    </div>
  )
}

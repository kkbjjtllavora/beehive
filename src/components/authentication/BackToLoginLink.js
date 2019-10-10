import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import { LoginRoute } from 'constants/Routes';

const s = StyleSheet.create({
  backToLoginButton: {
    color: '#34495e',
    fontSize: '13px',
    left: '0',
    position: 'absolute',
    textDecoration: 'none',
    top: '-6%',
  },
});

export default function BackToLoginLink() {
  return (
    <Link className={css(s.backToLoginButton)} to={LoginRoute.path}>
      &#8592; Back to login
    </Link>
  )
}

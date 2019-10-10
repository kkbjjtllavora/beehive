import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import AuthLogo from 'components/authentication/AuthLogo';

const LOGIN_CONTAINER_STYLE = {
  background: '#ecf0f1',
  height: '100%',
  position: 'absolute',
  width: '100%',
}

const LOGIN_FORM_STYLE = {
  position: 'relative',
  background: '#fff',
  boxShadow: '2px 2px 10px 0px rgba(0,0,0,0.4)',
  minHeight: '320px',
  margin: 'auto',
  marginTop: '8%',
  padding: '15px 40px 50px',
  width: '300px',
}

const s = StyleSheet.create({
  loginContainer:   LOGIN_CONTAINER_STYLE,
  loginForm:        LOGIN_FORM_STYLE,
});

export default function AuthLayout({
  children
}) {
  return (
    <div className={css(s.loginContainer)}>
      <div className={css(s.loginForm)}>
        <AuthLogo />

        { children }
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
}

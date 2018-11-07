import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import logo from '../../assets/images/logo_2.png';

const LOGO_CONTAINER_STYLE = {
  marginBottom: '15px'
}

const LOGO_STYLE = {
  width: '170px',
  margin: '0 auto',
  display: 'block',
}

const s = StyleSheet.create({
  logoContainer: LOGO_CONTAINER_STYLE,
  logo:          LOGO_STYLE,
});

export default function AuthLogo() {
  return (
    <div className={css(s.logoContainer)}>
      <img className={css(s.logo)} src={logo} alt="Beebo" />
    </div>
  )
}

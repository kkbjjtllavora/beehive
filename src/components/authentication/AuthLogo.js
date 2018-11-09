import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import logo from 'assets/images/logo_2.png';

const s = StyleSheet.create({
  logoContainer: { 
    marginBottom: '15px' 
  },

  logo: {
    width: '170px',
    margin: '0 auto',
    display: 'block',
  },
});

const AuthLogo = () => {
  return (
    <div className={css(s.logoContainer)}>
      <img className={css(s.logo)} src={logo} alt="Beebo" />
    </div>
  )
}

export default AuthLogo;

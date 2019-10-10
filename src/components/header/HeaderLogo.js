import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import { DashboardRoute } from 'constants/Routes';
import logo from 'assets/images/icon.png';

const HEADER_LOGO_STYLE = { 
  width: '200px', 
  height: 'auto', 
  lineHeight: '60px',
  marginTop: '16px',
}

const s = StyleSheet.create({
  headerLogo: HEADER_LOGO_STYLE,
});

const HeaderLogo = () => {
  return (
    <Link to={DashboardRoute.path}>
      <img src={logo} className={css(s.headerLogo)} alt="Beebo Hive" />
    </Link>
  )
}

export default HeaderLogo;

import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import HeaderWrapper from './HeaderWrapper';
import HeaderLogo from './HeaderLogo';
import Dropdown from '../forms/Dropdown';

const TOOLBAR_STYLE = {
  float: 'right', 
  position: 'relative',
  width: 'auto',
}

const LINK_STYLE = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '18px',
  marginRight: '20px',

  ':hover': {
    color: '#bdc3c7',
  }
}

const s = StyleSheet.create({
  toolbar: TOOLBAR_STYLE,
  link: LINK_STYLE,
});

export default class Header extends Component {
  render() { 
    const { logoutUser, fullName, addUserDone } = this.props;

    return  !addUserDone ? (
        <HeaderWrapper>
          <HeaderLogo />

          <div className={css(s.toolbar)}>
            <Link className={css(s.link)} to='/company'>
              Company
            </Link>

            <Dropdown logoutUser={logoutUser} fullName={fullName} />
          </div>
        </HeaderWrapper>
      ) : null;
  }
}

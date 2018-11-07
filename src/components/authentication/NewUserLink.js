import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import { NewUserRoute } from '../../constants/Routes';

const NEW_USER_LINK_STYLE = {
  color: '#f39c12',
  display: 'block',
  fontSize: '13px',
  margin: '0 auto',
  textAlign: 'center',
  textDecoration: 'none',
}

const s = StyleSheet.create({
  newUserLink: NEW_USER_LINK_STYLE,
});

export default function NewUserLink() {
  return (
    <Link to={NewUserRoute.path} className={css(s.newUserLink)}>
      Not registered? <strong>Create an account</strong>
    </Link>
  )
}

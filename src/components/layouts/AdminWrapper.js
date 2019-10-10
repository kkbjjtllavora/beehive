import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Header from 'containers/header/Header';

const ADMIN_CONTENT_STYLE = { 
  width: '100%', 
  boxSizing: 'border-box', 
  padding: '30px' 
}

const s = StyleSheet.create({
  adminContent: ADMIN_CONTENT_STYLE,
});

const AdminWrapper = ({
  children
}) => {
  return (
    <div>
      <Header />

      <div className={css(s.adminContent)}>
        { children }
      </div>
    </div>
  )
}

export default AdminWrapper;

AdminWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

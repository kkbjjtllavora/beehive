import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const TITLE_LOGO_STYLE = {
  width: '80px',
  float: 'left',
  marginRight: '15px',
}

const TITLE_CONTAINER = {
  marginBottom: '30px',
}

const s = StyleSheet.create({
  titleLogo:       TITLE_LOGO_STYLE,  
  titleContainer:  TITLE_CONTAINER,
});

const ContentTitle = ({
  children,
  thumb
}) => {
  return (
    <div className={css(s.titleContainer)}>
      <img className={css(s.titleLogo)} src={thumb} alt={children} />
      <h3>{ children }</h3>
    </div>
  )
}

export default ContentTitle;

ContentTitle.propTypes = {
  children: PropTypes.node.isRequired,
  thumb: PropTypes.string
}

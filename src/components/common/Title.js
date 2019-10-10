import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

export const TITLE_A = 'TITLE-A';
export const TITLE_B = 'TITLE-B';

const TITLE_A_CONTAINER_STYLE = {
  background: '#f1c40f',
  color: '#fff',
  display: 'block',
  font: '700 15px/40px "Lato", sans-serif',
  padding: '5px 0 5px 23px',
  letterSpacing: '0',
  fontWeight: 'normal',
  textTransform: 'none',
  fontSize: '21px',
}

const TITLE_B_CONTAINER_STYLE = {
  display: 'block',
  color: '#2980b9',
  fontSize: '30px',
  borderBottom: '1px solid #2980b9',
  paddingBottom: '10px',
  fontWeight: 'normal',
  marginBottom: '15px',
}

const s = StyleSheet.create({
  [TITLE_A]: TITLE_A_CONTAINER_STYLE,
  [TITLE_B]: TITLE_B_CONTAINER_STYLE,
});

const Title = ({
  children,
  titleColor,
  variety = TITLE_A,
}) => (
  <h1 className={css(s[variety])} style={{ background: titleColor }}>
    { children }
  </h1>
)

export default Title;

Title.propTypes = {
  children:   PropTypes.node.isRequired,
  titleColor: PropTypes.string,
  variety:    PropTypes.oneOf([
                TITLE_A,
                TITLE_B
              ])
}

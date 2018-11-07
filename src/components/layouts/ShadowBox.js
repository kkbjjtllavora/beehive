import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Title from '../common/Title';
import Spinner from '../common/Spinner';

const WITH_TITLE = 'with-title';

const WITH_TITLE_CONTAINER_STYLE = {
  background: '#fff',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '25px',
  width: '1300px',
  minHeight: '300px',
  boxSizing: 'border-box',
  boxShadow: '2px 2px 10px 0px rgba(0,0,0,0.4)',
}

const SHADOW_BOX_BODY_STYLE = {
  padding: '20px 15px',
}

const s = StyleSheet.create({
  [WITH_TITLE]:   WITH_TITLE_CONTAINER_STYLE,
  shadowBoxBody:  SHADOW_BOX_BODY_STYLE,
});

export default function ShadowBox({
  children,
  withTitle,
  title,
  width,
  titleColor,
  isLoading,
}) {
  const variety = WITH_TITLE;

  const renderTitle = (title) => 
    <Title titleColor={titleColor}>
      { title }
    </Title>;

  return (
    <div className={css(s[variety])} style={{ width }}>
      { withTitle && renderTitle(title) }

      <div className={css(s.shadowBoxBody)}>
        { isLoading ? <Spinner /> : children }
      </div>
    </div>
  )
}

ShadowBox.defaultProps = {
  title:     '',
  withTitle: true
}

ShadowBox.propTypes = {
  children:  PropTypes.node.isRequired,
  withTitle: PropTypes.bool,
  title:     PropTypes.string
}

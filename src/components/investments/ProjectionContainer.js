import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import { getRandomArbitrary, formatMoney } from 'utils/number';
import SpinnerB from 'components/common/SpinnerB';

const PROJECTION_CONTAINER_STYLE = {
  textAlign: 'center',
  color: '#16a085',
  marginBottom: '40px',
  height: '80px',
}

const PROJECTION_VALUE_STYLE = {
  fontSize: '50px',
  lineHeight: '1',
}

const s = StyleSheet.create({
  projectionContainer:   PROJECTION_CONTAINER_STYLE,
  projectionValue:       PROJECTION_VALUE_STYLE,
});

const ProjectionContainer = ({
  saveAmount,
  investmentPeriod,
  isSaveAmountLoading
}) => {
  const projectionValue = ((investmentPeriod * 12) * saveAmount * getRandomArbitrary(1,2)).toFixed(0)

  return (
    <div className={css(s.projectionContainer)}>
      <h4>Projection in { investmentPeriod } years*:</h4>

      <p className={css(s.projectionValue)}>
        { isSaveAmountLoading ? <SpinnerB /> : `P${formatMoney(projectionValue)}` }
      </p>
    </div>
  )
}

export default ProjectionContainer;

ProjectionContainer.propTypes = {
  saveAmount:          PropTypes.string,
  investmentPeriod:    PropTypes.number,
  isSaveAmountLoading: PropTypes.string
}

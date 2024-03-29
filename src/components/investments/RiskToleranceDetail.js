import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import SpinnerB from 'components/common/SpinnerB';

const RISK_TOLERANCE_DETAIL_STYLE = {
  textAlign: 'center',
  fontSize: '15px',
  marginBottom: '30px',
}

const s = StyleSheet.create({
  riskToleranceDetail: RISK_TOLERANCE_DETAIL_STYLE,
});

const RiskToleranceDetail = ({
  details,
  riskTolerance,
  isRiskToleranceLoading,
}) => {
  return (
    <p className={css(s.riskToleranceDetail)}>
      { isRiskToleranceLoading ? <SpinnerB /> : details[riskTolerance] }
    </p>
  )
}

export default RiskToleranceDetail;

RiskToleranceDetail.propTypes = {
  details:                PropTypes.object,
  riskTolerance:          PropTypes.string,
  isRiskToleranceLoading: PropTypes.bool
}

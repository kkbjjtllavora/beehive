import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import SpinnerB from '../common/SpinnerB';

const RISK_TOLERANCE_DETAIL_STYLE = {
  textAlign: 'center',
  fontSize: '15px',
  marginBottom: '30px',
}

const s = StyleSheet.create({
  riskToleranceDetail: RISK_TOLERANCE_DETAIL_STYLE,
});

export default function RiskToleranceDetail({
  details,
  riskTolerance,
  isRiskToleranceLoading,
}) {
  return (
    <p className={css(s.riskToleranceDetail)}>
      { isRiskToleranceLoading ? <SpinnerB /> : details[riskTolerance] }
    </p>
  )
}

import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import ShadowBox from 'containers/layouts/ShadowBox';
import DashboardListItem from 'components/dashboard/DashboardListItem';

const NO_DISCREPANCY_STYLE = {
  textAlign: 'center',
  color: '#2f3640',
  marginTop: '80px',
}

const s = StyleSheet.create({
  noDiscrepancy: NO_DISCREPANCY_STYLE,
});

export default function ResolutionCenter({
  discrepancyArray,
  fullName,
}) {
  const discrepancyList = discrepancyArray.map((date, idx) => {
    return <DashboardListItem
              key={idx}
              resolutionDate={date}
              mainInfo={fullName}
              resolutionDetail="Missing Logs" />
  });

  const discrepancies = discrepancyArray.length !== 0 ? 
    <ul>{  discrepancyList }</ul> :
    <div className={css(s.noDiscrepancy)}>
      Yay, no attendance discrepancies this month
    </div>

  return (
    <ShadowBox title="Resolution Center" width="100%" titleColor="#f1c40f">
      { discrepancies }
    </ShadowBox>
  )
}

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ShadowBox from 'containers/layouts/ShadowBox';
import DashboardListItem from 'components/dashboard/DashboardListItem';
import mailIcon from 'assets/images/mail-icon.png';
import circleWithMinusIcon from 'assets/images/circle-with-minus-icon.png';
import pencilIcon from 'assets/images/pencil-icon.png';

const s = StyleSheet.create({
  noDiscrepancy: {
    textAlign: 'center',
    color: '#2f3640',
    marginTop: '80px',
  },

  resolutionCenterIcon: {
    width: '18px',
    marginLeft: '5px',
  }
});

const ResolutionCenterBtn = ({ icon }) => (
  <Link to="#">
    <img src={icon} 
         className={css(s.resolutionCenterIcon)}
         alt="discrepancy" />
  </Link>
)

const resolutionCenterBtns = [
  <ResolutionCenterBtn icon={pencilIcon} />,
  <ResolutionCenterBtn icon={mailIcon} />,
  <ResolutionCenterBtn icon={circleWithMinusIcon} />
]

const ResolutionCenter = ({
  discrepancyArray,
  fullName,
}) => {
  const discrepancyList = discrepancyArray.map((date, idx) => {
    return <DashboardListItem key={idx}
                              resolutionDate={date}
                              mainInfo={fullName}
                              resolutionDetail="Missing Logs" 
                              rightInfo={resolutionCenterBtns} />
  });

  const discrepancies = discrepancyArray.length !== 0 ? 
    <ul>{  _.take(discrepancyList, 4) }</ul> :
    <div className={css(s.noDiscrepancy)}>
      Yay, no attendance discrepancies this month
    </div>

  return (
    <ShadowBox title="Resolution Center" width="100%" titleColor="#f1c40f">
      { discrepancies }

      { discrepancyArray.length > 5 && 'More!' }
    </ShadowBox>
  )
}

export default ResolutionCenter;

ResolutionCenter.propTypes = {
  discrepancyArray: PropTypes.array,
  fullName:         PropTypes.string
}

ResolutionCenterBtn.propTypes = {
  icon: PropTypes.string
}

import React from 'react';
import PropTypes from 'prop-types';
import ShadowBox from 'containers/layouts/ShadowBox';
import DashboardListItem from 'components/dashboard/DashboardListItem';

const TeamAttendance = ({
  teamAttendance,
}) => {
  const teamAttendanceList = teamAttendance.map(({ fullName, attendance }) => {
    return <DashboardListItem key={fullName}
                              mainInfo={fullName}
                              rightInfo={attendance} />
  });

  return (
    <ShadowBox title="Team Attendance" width="100%" titleColor="#9b59b6">
      <ul>{ teamAttendanceList }</ul>
    </ShadowBox>
  )
}

export default TeamAttendance;

TeamAttendance.propTypes = {
  teamAttendance: PropTypes.array
}

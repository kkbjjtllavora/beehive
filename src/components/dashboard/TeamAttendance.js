import React from 'react';
import ShadowBox from '../../containers/layouts/ShadowBox';
import DashboardListItem from './DashboardListItem';

export default function TeamAttendance({
  teamAttendance,
}) {
  return (
    <ShadowBox title="Team Attendance" width="100%" titleColor="#9b59b6">
      <ul>
        {
          teamAttendance.map(({ fullName, attendance }) => {
            return <DashboardListItem
                      key={fullName}
                      mainInfo={fullName}
                      rightInfo={attendance} />
          })
        }
      </ul>
    </ShadowBox>
  )
}


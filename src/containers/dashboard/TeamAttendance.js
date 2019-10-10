import { connect } from 'react-redux';
import moment from 'moment';
import TeamAttendance from 'components/dashboard/TeamAttendance';

const mapStateToProps = ({
  teamMembers: {
    teamMembers,
    isLoading,
  }
}) => {
  const teamAttendance = [];

  teamMembers.forEach(member => {
    const basicInfo = member.profile.basicInfo;
    const first = basicInfo.firstName;
    const last  = basicInfo.lastName;
    const fullName = `${last}, ${first}`;
    const date = moment().format('MM-DD-YY');

    const attendance = member.attendance && member.attendance[date] ? 
                                     member.attendance[date].timeIn : 
                                     'Expected 2:00 PM';

    teamAttendance.push({ fullName, attendance });
  });

  return { isLoading, teamAttendance }
}

export default connect(mapStateToProps)(TeamAttendance);

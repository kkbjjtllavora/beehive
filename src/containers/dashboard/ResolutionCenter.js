import { connect } from 'react-redux';
import moment from 'moment';
import ResolutionCenter from '../../components/dashboard/ResolutionCenter';

const mapStateToProps = ({
  user: {
    userAttendance,
    userData: {
      basicInfo: {
        firstName,
        lastName
      }
    }
  },
}) => {
  const today = moment();
  const firstDay = moment(Object.keys(userAttendance)[0]);
  const attendanceCount = today.diff(firstDay, 'days');
  
  const discrepancyArray = [];

  for(let x=0; x <= attendanceCount; x++) {
    const date = moment().subtract(x, 'days').format('MM-DD-YY')
    userAttendance[date] === undefined && discrepancyArray.push(date);
  }

  return { 
    discrepancyArray,
    fullName: `${lastName}, ${firstName}`,
  }
}

export default connect(mapStateToProps)(ResolutionCenter);

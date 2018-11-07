import { connect } from 'react-redux';
import moment from 'moment';
import Announcement from '../../components/dashboard/Announcement';

const mapStateToProps = ({
  teamMembers: {
    users,
    isLoading
  }
}) => {
  const today = moment().format('MM-DD-YY');
  const newUsersArray = [];

  for(let key in users) {
    if(Object.keys(users[key].attendance).length === 1) {
      if(users[key].attendance[today] !== undefined) {
        newUsersArray.push(users[key].profile.basicInfo);
      }
    };
  }
  
  return { newUsersArray }
}

export default connect(mapStateToProps)(Announcement);

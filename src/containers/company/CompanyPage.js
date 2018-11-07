import { connect }  from 'react-redux';
import CompanyPage from 'components/company/CompanyPage';

const mapStateToProps = ({
  teamMembers: {
    users,
  },
}) => {
  const userInfos = [];

  for(let key in users) {
    const userProfile = users[key].profile
    const { firstName, lastName } = userProfile.basicInfo;
    const { department, title, team, location } = userProfile.workInfo;

    const userInfo = {
      department,
      title,
      team,
      location,
    };

    userInfo.fullName = `${firstName} ${lastName}`;

    userInfos.push(userInfo);
  }
  
  return { userInfos };
}

export default connect(mapStateToProps)(CompanyPage);

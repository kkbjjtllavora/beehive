import { connect } from 'react-redux';
import Header from 'components/header/Header';
import { logoutUser } from 'containers/authentication/store/actions';

const mapStateToProps = ({
  user: {
    userData,
    addUserDone
  }
}) => {

  let fullName;

  if(!addUserDone) {
    const first = userData.basicInfo.firstName;
    const last  = userData.basicInfo.lastName;
    
    fullName = `${first} ${last}`;
  }

  return { fullName, addUserDone }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

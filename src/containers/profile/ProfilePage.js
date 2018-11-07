import { connect } from 'react-redux';
import ProfilePage from '../../components/profile/ProfilePage';
import { resetProfileState, populateProfileData } from './store/actions';

const mapStateToProps = ({
  user: {
    localId,
    addUserDone,
  },
}) => ({
  addUserDone,
  userId: localId,
});

const mapDispatchToProps = dispatch => ({
  resetProfileState:       () => dispatch(resetProfileState()),
  populateProfileData: userId => dispatch(populateProfileData(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

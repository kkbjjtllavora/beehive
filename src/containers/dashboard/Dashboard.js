import { connect } from 'react-redux';
import Dashboard from '../../components/dashboard/Dashboard';
import { getTeamMembers, resetTeamMembersState } from './store/actions';

const mapStateToProps = ({
  user: {
    addUserDone,
    userData,
  }
}) => ({
  addUserDone,
  teamName: userData.workInfo.team,
});

const mapDispatchToProps = dispatch => ({
  onGetTeamMembers: userTeamName => dispatch(getTeamMembers(userTeamName)),
  onResetTeamMembersState: () => dispatch(resetTeamMembersState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

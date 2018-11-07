import { connect } from 'react-redux';
import NewUserPage from 'components/authentication/NewUserPage';
import { submitUser } from 'containers/authentication/store/actions';

const mapStateToProps = ({ 
  user: { 
    isAddUserLoading,
    addUserError,
  } 
}) => ({ 
  isAddUserLoading,
  addUserError,
});

const mapDispatchToProps = dispatch => ({
  addUser: userData => dispatch(submitUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUserPage);

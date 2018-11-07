import NewUserPage from '../../components/authentication/NewUserPage';
import { connect } from 'react-redux';
import { submitUser } from './store/actions';

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

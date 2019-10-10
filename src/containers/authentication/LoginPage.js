import { connect } from 'react-redux';
import LoginPage from 'components/authentication/LoginPage';
import { signInUser } from 'containers/authentication/store/actions';

const mapStateToProps = ({ 
  user: {
    isSigninUserLoading,
    signinUserError
  },
}) => ({
  isSigninUserLoading,
  signinUserError
}); 

const mapDispatchToProps = dispatch => ({
  signInUser: (email, password) => dispatch(signInUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

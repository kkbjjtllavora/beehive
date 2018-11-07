import { connect } from 'react-redux';
import InvestmentsPage from '../../components/investments/InvestmentsPage';
import { resetFormFields } from './store/actions';

const mapDispatchToProps = dispatch => ({
  resetFormFields:   () => dispatch(resetFormFields()),
});

export default connect(null, mapDispatchToProps)(InvestmentsPage);

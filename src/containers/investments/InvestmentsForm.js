import { connect } from 'react-redux';
import InvestmentsForm from '../../components/investments/InvestmentsForm';
import { updateFormFields, resetFormFields } from './store/actions';

const mapStateToProps = ({
  investments: {
    investmentFormFields,
  }
}) => ({
  formFields: investmentFormFields,
});

const mapDispatchToProps = dispatch => ({
  onChange:        data => dispatch(updateFormFields(data)),
  resetFormFields:   () => dispatch(resetFormFields()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentsForm);

import { connect } from 'react-redux';
import FormElements from '../../components/forms/FormElements';
import { updateField } from './store/actions';

const mapDispatchToProps = dispatch => ({
  onChange: field => {
    const name   = Object.keys(field).shift();
    const value  = field[name];

    dispatch(updateField(name, value));
  }
});

export default connect(null, mapDispatchToProps)(FormElements);

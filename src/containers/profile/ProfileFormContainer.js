import { connect } from 'react-redux';
import ProfileFormContainer from 'components/profile/ProfileFormContainer';
import { submitInfo, submitBackButton } from 'containers/profile/store/actions';

import { INITIAL_INFO } from './store/reducers';

const mapStateToProps = ({
  profile: {
    currentInfo,
    profileFields,
    isFormValid,
    isFormComplete
  }
}) => {
  const formFields = [];

  for(let key in profileFields[currentInfo].fields.config) {
    formFields.push({
      id: key,
      config: profileFields[currentInfo].fields.config[key]
    })
  }

  const isInitial = currentInfo === INITIAL_INFO ? true : false;

  return { 
    formFields,
    isFormValid,
    isFormComplete,
    isInitial,
    formTitle: profileFields[currentInfo].fields.title,
  }
};

const mapDispatchToProps = dispatch => ({
  onSubmit:           () => dispatch(submitInfo()),
  onSubmitBackButton: () => dispatch(submitBackButton()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFormContainer);

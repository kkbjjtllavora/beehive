import { connect } from 'react-redux';
import ProfilePreview from 'components/profile/ProfilePreview';
import { saveFormData, backToEditProfile } from 'containers/profile/store/actions';
import { addUserComplete } from 'containers/authentication/store/actions';

const mapStateToProps = ({
  user: {
    localId,
    addUserDone,
    addUserId,
  },
  profile: { 
    isFormComplete,
    profileFields,
    formData,
    isLoadingOnSave,
    isFormSaved,
  }
}) => {
  const tableDatas = [];

  for(let key in profileFields) {
    tableDatas.push(profileFields[key].fields)
  }

  return { 
    tableDatas,
    formData,
    isFormComplete,
    isLoadingOnSave,
    isFormSaved,
    addUserDone,
    addUserId,
    userId: localId
  }
};

const mapDispatchToProps = dispatch => ({
  onSaveData:        (userId, formData) => dispatch(saveFormData(userId, formData)),
  addUserComplete:                   () => dispatch(addUserComplete()),
  backToEditProfile:                 () => dispatch(backToEditProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePreview);

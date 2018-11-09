import React from 'react';
import PropTypes from 'prop-types';
import Button, { MEMBER_BUTTON } from 'components/forms/Button';
import Spinner from 'components/common/Spinner';

const SaveButton = ({
  isLoadingOnSave,
  addUserId,
  userId,
  onSaveData,
  formData,
  isFormComplete
}) => {
  const saveUserId = addUserId ? addUserId : userId;

  const saveButton = !isLoadingOnSave ? 
      <Button variety={MEMBER_BUTTON} onClick={() => onSaveData(saveUserId, formData)}>
        Save Data
      </Button> 
      : <SpinnerC />

  return isFormComplete ? saveButton : null;
}

export default SaveButton;

SaveButton.propTypes = {
  isLoadingOnSave: PropTypes.bool,
  addUserId:       PropTypes.func,
  userId:          PropTypes.string,
  onSaveData:      PropTypes.func,
  formData:        PropTypes.object,
  isFormComplete:  PropTypes.bool
}

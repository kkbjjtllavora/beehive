import React from 'react';
import Button, { MEMBER_BUTTON } from 'components/forms/Button';
import Spinner from 'components/common/Spinner';

export default function SaveButton({
  isLoadingOnSave,
  addUserId,
  userId,
  onSaveData,
  formData,
  isFormComplete
}) {
  const saveUserId = addUserId ? addUserId : userId;

  const saveButton = !isLoadingOnSave ? 
      <Button variety={MEMBER_BUTTON} onClick={() => onSaveData(saveUserId, formData)}>
        Save Data
      </Button> 
      : <SpinnerC />

  return isFormComplete ? saveButton : null;
}

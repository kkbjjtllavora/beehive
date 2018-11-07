import * as c from 'containers/profile/store/actionTypes';
import axios from 'axios-instance';

// populating info fields and values events
export const updateFieldValue = (name, value) => ({
  name,
  value,
  type: c.UPDATE_FIELD_VALUE
});

export const updateFieldTouched = (name) => ({
  name,
  type: c.UPDATE_FIELD_TOUCHED
})

export const updateFieldValid = (name, value) => ({
  name,
  value,
  type: c.UPDATE_FIELD_VALID
});

export const checkFormValidity = (name) => ({
  name,
  type: c.CHECK_FORM_VALIDITY
});

export const submitBackButton = () => ({
  type: c.SUBMIT_BACK_BUTTON
});

export const updateField = (name, value) => {
  return dispatch => {
    dispatch(updateFieldValue(name, value));
    dispatch(updateFieldValid(name, value));
    dispatch(updateFieldTouched(name));
    dispatch(checkFormValidity(name));
  }
};

// profile field submit events
export const updatFieldShow = () => ({
  type: c.UPDATE_FIELD_SHOW
});

export const updateCurrentInfo = () => ({
  type: c.UPDATE_CURRENT_INFO
});

export const resetFormIsValid = () => ({
  type: c.RESET_FORM_IS_VALID
});

export const loadingPreviewStart = () => ({
  type: c.LOADING_PREVIEW_START
});

export const loadingPreviewEnd = () => ({
  type: c.LOADING_PREVIEW_END
});

export const checkIsFormComplete = () => ({
  type: c.CHECK_IS_FORM_COMPLETE
});

export const storeFormData = () => ({
  type: c.STORE_FORM_DATA
})

export const submitInfo = () => {
  return dispatch => {
    dispatch(checkIsFormComplete());
    dispatch(updatFieldShow());
    dispatch(loadingPreviewStart());
    dispatch(resetFormIsValid());
    dispatch(storeFormData());

    setTimeout(() => {
      dispatch(loadingPreviewEnd());
      dispatch(updateCurrentInfo());
    }, 800);
  }
}

// saving data to the database events
export const saveFormDataStart = () => ({
  type: c.SAVE_FORM_DATA_START
});

export const saveFormDataEnd = () => ({
  type: c.SAVE_FORM_DATA_END
});

export const saveFormDataSuccess = () => ({
  type: c.SAVE_FORM_DATA_SUCCESS
})

export const saveFormData = (userId, formData) => {
  return dispatch => {
    dispatch(saveFormDataStart());

    axios.put(`/users/${userId}/profile.json`, formData)
      .then(response => {
        dispatch(saveFormDataEnd());
        dispatch(saveFormDataSuccess());
      })
      .catch(err => console.log(err));
  }
};

// setting and resetting profile state
export const resetProfileState = () => ({
  type: c.RESET_PROFILE_STATE
});

export const backToEditProfile = () => ({
  type: c.BACK_TO_EDIT_PROFILE
});


// populating profile page data upon mount
export const populateProfileDataStart = () => ({
  type: c.POPULATE_PROFILE_DATA_START
});

export const populateProfileDataEnd = () => ({
  type: c.POPULATE_PROFILE_DATA_END
});

export const populateProfileDataSuccess = (data) => ({
  data,
  type: c.POPULATE_PROFILE_DATA_SUCCESS
})

export const populateProfileData = (userId) => {
  return dispatch => {
    if(userId) {
      dispatch(populateProfileDataStart());

      axios.get(`/users/${userId}.json`)
        .then(response => {
          dispatch(populateProfileDataSuccess(response.data.profile));
          dispatch(populateProfileDataEnd());
        })
        .catch(error => console.log(error));
    }
  }
}

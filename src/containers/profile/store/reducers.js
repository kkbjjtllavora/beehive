import * as c from './actionTypes';
import { Record } from 'immutable';
import { checkValidity } from '../../../utils/validation';
import basicInfo, { BASIC_INFO } from '../../../components/profile/fieldConstants/basicInformation';
import workInfo, { WORK_INFO } from '../../../components/profile/fieldConstants/workInformation';
import govInfo, { GOV_INFO } from '../../../components/profile/fieldConstants/govInformation';

export const INFO_STORE = [
  BASIC_INFO, 
  WORK_INFO,
  GOV_INFO
];

export const INITIAL_INFO = BASIC_INFO;

const profileState = new Record({
  profileFields : {
    [BASIC_INFO]: { 
      fields: basicInfo,
      loading: false,
    },
    [WORK_INFO]: {
      fields: workInfo,
      loading: false,
    },
    [GOV_INFO]: {
      fields: govInfo,
      loading: false,
    }
  },
  currentInfo:        INITIAL_INFO,
  isFormValid:        false,
  isFormComplete:     false,
  formData:           {},
  isFormSaved:        false,
  isLoadingOnSave:    false,
  isLoadingOnGetData: false,
});

const initialState = new profileState();

export const profile = (state = initialState, action) => {
  const pathArray = [
    'profileFields',
    state.currentInfo,
    'fields',
    'config',
  ]

  const currentInfoPath = (path = []) => ([
    ...pathArray,
    action.name,
    ...path
  ]);

  const configPath = (path = []) => ([
    ...pathArray,
    ...path
  ]);

  switch(action.type) {
    case c.UPDATE_FIELD_VALUE:
      return state.setIn(currentInfoPath(['tableContent', 'value']), action.value);

    case c.UPDATE_FIELD_TOUCHED:
      return state.setIn(currentInfoPath(['touched']), true);

    case c.UPDATE_FIELD_VALID:
      return state.setIn(
        currentInfoPath(['valid']), 
        checkValidity(action.value, state.getIn(currentInfoPath(['validation'])))
    );

    case c.CHECK_FORM_VALIDITY:
      let isFormValid = true;
      for(let key in state.getIn(configPath())) {
        isFormValid = state.getIn(configPath([key, 'valid'])) && isFormValid;
      }
      return state.set('isFormValid', isFormValid);

    case c.SUBMIT_BACK_BUTTON:
      return state.merge({
        isFormValid: true,
        currentInfo: INFO_STORE[INFO_STORE.indexOf(state.currentInfo) - 1]
      });

    case c.UPDATE_FIELD_SHOW:
      return state.setIn(['profileFields', state.currentInfo, 'fields', 'show'], true);

    case c.UPDATE_CURRENT_INFO:
      return state.set('currentInfo', INFO_STORE[INFO_STORE.indexOf(state.currentInfo) + 1]);
      
    case c.RESET_FORM_IS_VALID:
      return state.set('isFormValid', false);

    case c.LOADING_PREVIEW_START:
      return state.setIn(['profileFields', state.currentInfo, 'loading'], true);

    case c.LOADING_PREVIEW_END:
      return state.setIn(['profileFields', state.currentInfo, 'loading'], false);

    case c.CHECK_IS_FORM_COMPLETE:
      return INFO_STORE.indexOf(state.currentInfo) + 1 === INFO_STORE.length ? state.set('isFormComplete', true) : state;

    case c.STORE_FORM_DATA:
      const formData = state.formData;
      const config = state.profileFields[state.currentInfo].fields.config;

      formData[state.currentInfo] = {};

      for(let keyB in config) {
        formData[state.currentInfo][keyB] = config[keyB].tableContent.value
      }

      return state.merge({ formData });

    case c.SAVE_FORM_DATA_START:
      return state.set('isLoadingOnSave', true);

    case c.SAVE_FORM_DATA_END:
      return state.set('isLoadingOnSave', false);

    case c.SAVE_FORM_DATA_SUCCESS:
      return state.set('isFormSaved', true);

    case c.RESET_PROFILE_STATE:
      return state.clear();

    case c.BACK_TO_EDIT_PROFILE:
      return state.merge({
        isFormComplete: false,
        currentInfo: INITIAL_INFO,
        isFormSaved: false,
        isFormValid: true
      });

    case c.POPULATE_PROFILE_DATA_START:
      return state.set('isLoadingOnGetData', true);

    case c.POPULATE_PROFILE_DATA_END:
      return state.set('isLoadingOnGetData', false);

    case c.POPULATE_PROFILE_DATA_SUCCESS:
      const updatedProfileFields = state.profileFields;
      for(let keyX in state.profileFields) {
        for(let keyY in action.data[keyX]) {
          updatedProfileFields[keyX].fields.config[keyY].tableContent.value = action.data[keyX][keyY];
          updatedProfileFields[keyX].fields.config[keyY].valid = true;
          updatedProfileFields[keyX].fields.show = true;
        }
      }
      return state.merge({
        profileFields: updatedProfileFields,
        isFormValid: true
      });

    default:
      return state;
  }
}



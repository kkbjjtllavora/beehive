import * as c from './actionTypes';
import { saveAmount, investmentPeriod } from '../../../components/investments/fieldConstants/investmentOptions';

export const updateSaveAmountStart = () => ({
  type: c.UPDATE_SAVE_AMOUNT_START,
});

export const updateRiskToleranceStart = () => ({
  type: c.UPDATE_RISK_TOLERANCE_START,
});

export const updateFormFieldsEnd = () => ({
  type: c.UPDATE_FORM_FIELDS_END,   
});

export const updateFormFieldsSuccess = (name, value) => ({
  name, 
  value, 
  type: c.UPDATE_FORM_FIELDS_SUCCESS
})

export const updateFormFields = (data) => {
  const name = Object.keys(data).shift();
  const value = data[name];

  return dispatch => {
    const isSaveAmount = (name === saveAmount || name === investmentPeriod);

    isSaveAmount ? 
      dispatch(updateSaveAmountStart()) : 
      dispatch(updateRiskToleranceStart());

    dispatch(updateFormFieldsSuccess(name, value));

    let searchTimeout;
    if(searchTimeout !== undefined) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      setTimeout(() => {
        dispatch(updateFormFieldsEnd()); 
      }, 500);
    }, 500);
  }
};

export const resetFormFields = () => ({
  type: c.RESET_FORM_FIELDS,
});

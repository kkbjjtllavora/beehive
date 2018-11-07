import { Record } from 'immutable';
import * as c from './actionTypes';
import investmentOptions from '../../../components/investments/fieldConstants/investmentOptions';

const investmentsState = new Record({
  investmentFormFields:    investmentOptions,
  isSaveAmountLoading:     false,
  isRiskToleranceLoading:  false,
});

const initialState = new investmentsState();

export const investments = (state = initialState, action) => {
  switch(action.type) {
    case c.UPDATE_SAVE_AMOUNT_START:
      return state.set('isSaveAmountLoading', true);

    case c.UPDATE_RISK_TOLERANCE_START:
      return state.set('isRiskToleranceLoading', true);

    case c.UPDATE_FORM_FIELDS_END:
      return state.merge({
        isSaveAmountLoading: false,
        isRiskToleranceLoading: false,
      });

    case c.UPDATE_FORM_FIELDS_SUCCESS:
      return state.setIn(['investmentFormFields', action.name, 'value'], action.value);

    case c.RESET_FORM_FIELDS:
      return state.clear();

    default:
      return state;
  }
}

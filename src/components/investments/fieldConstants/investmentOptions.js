import { INPUT, SELECT } from '../../forms/FormElements';
import { MEMBER_INPUT } from '../../forms/Input';
import { MEMBER_SELECT } from '../../forms/Select';

export const saveAmount         = 'saveAmount';
export const riskTolerance      = 'riskTolerance';
export const investmentPeriod   = 'investmentPeriod';

export const NOT_AT_ALL         = 'Not at all';
export const OPEN_TO_SOME_RISK  = 'Open to some risk';
export const VERY_RISKY         = 'Very risky';

const SAVE_AMOUNT = {
  elementType: INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'save amount',
    name: saveAmount,
  },
  value: '30000',
  label: 'Amount you want to save a month?',
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const RISK_TOLERANCE = {
  elementType: SELECT,
  elementConfig: {
    name: riskTolerance,
    options: [
      { value: 'Not at all', displayValue: 'Not at all' },
      { value: 'Open to some risk', displayValue: 'Open to some risk' },
      { value: 'Very risky', displayValue: 'Very risky' }
    ]
  },
  value: 'Not at all',
  label: 'How risk tolerant are you?',
  variety: MEMBER_SELECT,
  validation: {
    required: true,
  },
  valid: true,
  touched: false,
}

const INVESTMENT_PERIOD = {
  elementType: SELECT,
  elementConfig: {
    name: investmentPeriod,
    options: [
      {value: 1, displayValue: '1 Year'},
      {value: 2, displayValue: '2 Years'},
      {value: 5, displayValue: '5 Years'},
      {value: 10, displayValue: '10 Years'},
      {value: 15, displayValue: '15 Years'},
      {value: 20, displayValue: '20 Years'},
      {value: 30, displayValue: '30 Years'},
      {value: 40, displayValue: '40 Years'},
    ]
  },
  value: 1,
  label: 'How long do you want to invest?',
  variety: MEMBER_SELECT,
  validation: {
    required: true,
  },
  valid: true,
  touched: false,
}

const investmentOptions = {
  [saveAmount]:       SAVE_AMOUNT,
  [riskTolerance]:    RISK_TOLERANCE,
  [investmentPeriod]: INVESTMENT_PERIOD,
}

export default investmentOptions;

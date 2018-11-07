import { INPUT } from '../../forms/FormElements';
import { MEMBER_INPUT } from '../../forms/Input';

export const GOV_INFO      = 'govInfo';

export const sss           = 'sss';
export const tin           = 'tin';
export const philHealth    = 'philHealth';
export const pagIbig       = 'pagIbig';

const SSS = {
  elementType:  INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'SSS',
    name: sss,
  },
  tableContent: {
    label: 'SSS',
    value: '',
    show: false,
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const TIN = {
  elementType: INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'TIN',
    name: tin,
  },
  tableContent: {
    label: 'TIN',
    value: '',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const PHIL_HEALTH = {
  elementType: INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'PhilHealth',
    name: philHealth,
  },
  tableContent: {
    label: 'PhilHealth',
    value: '',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const PAG_IBIG = {
  elementType: INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'PAG-IBIG',
    name: pagIbig,
  },
  tableContent: {
    label: 'PAG-IBIG',
    value: '',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}


const govInformation = {
  title: 'Government Information',
  colspan: '4',
  infoType: GOV_INFO,
  rows: [[ 
      sss,
      tin,
      philHealth,
      pagIbig
  ]],
  config: {
    [sss]: SSS,
    [tin]: TIN,
    [philHealth]: PHIL_HEALTH,
    [pagIbig]: PAG_IBIG,
  },
  show: false,
}

export default govInformation;

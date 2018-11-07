import { INPUT, SELECT } from '../../forms/FormElements';
import { MEMBER_INPUT } from '../../forms/Input';
import { MEMBER_SELECT } from '../../forms/Select';

export const BASIC_INFO  = 'basicInfo';

export const firstName   = 'firstName';
export const middleName  = 'middleName';
export const lastName    = 'lastName';
export const gender      = 'gender';
export const civilStatus = 'civilStatus';
export const systemID    = 'systemId';
export const employeeID  = 'employeeId';

const FIRST_NAME = {
  elementType:  INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'first name',
    name: firstName,
  },
  tableContent: {
    value: '',
    label: 'First Name',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const MIDDLE_NAME = {
  elementType: INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'middle name',
    name: middleName,
  },
  tableContent: {
    value: '',
    label: 'Middle Name',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const LAST_NAME = {
  elementType: INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'last name',
    name: lastName,
  },
  tableContent: {
    value: '',
    label: 'Last Name',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const GENDER = {
  elementType: SELECT,
  elementConfig: {
    name: gender,
    options: [
      {value: 'male', displayValue: 'Male'},
      {value: 'female', displayValue: 'Female'}
    ]
  },
  tableContent: {
    value: 'male',
    label: 'Gender',
  },
  variety: MEMBER_SELECT,
  validation: {},
  valid: true,
  touched: false,
}

const CIVIL_STATUS = {
  elementType: SELECT,
  elementConfig: {
    name: civilStatus,
    options: [
      {value: 'single', displayValue: 'Single'},
      {value: 'married', displayValue: 'Married'}
    ]
  },
  tableContent: {
    value: 'single',
    label: 'Civil Status',
  },
  variety: MEMBER_SELECT,
  validation: {},
  valid: true,
  touched: false,
}

const SYSTEM_ID = {
  elementType: INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'system ID',
    name: systemID,
  },
  tableContent: {
    value: '',
    label: 'System ID',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const EMPLOYEE_ID = {
  elementType: INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'employee ID',
    name: employeeID,
  },
  tableContent: {
    value: '',
    label: 'Employee ID',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const basicInformation = {
  title: 'Basic Information',
  colspan: '4',
  infoType: BASIC_INFO,
  rows: [[ 
    firstName ,
    middleName,
    lastName,
  ],[
    gender,
    civilStatus,
    systemID,
    employeeID
  ]],
  config: {
    [firstName]:    FIRST_NAME,
    [middleName]:   MIDDLE_NAME,
    [lastName]:     LAST_NAME,
    [gender]:       GENDER,
    [civilStatus]:  CIVIL_STATUS,
    [systemID]:     SYSTEM_ID,
    [employeeID]:   EMPLOYEE_ID,
  },
  show: false
}

export default basicInformation;

import { INPUT, SELECT } from 'components/forms/FormElements';
import { MEMBER_INPUT } from 'components/forms/Input';
import { MEMBER_SELECT } from 'components/forms/Select';

export const WORK_INFO        = 'workInfo';

export const title            = 'title';
export const location         = 'location';
export const department       = 'department';
export const employmentStatus = 'employmentStatus';
export const employeeType     = 'employeeType';
export const team             = 'team';

const TITLE = {
  elementType:  INPUT,
  elementConfig: {
    type: 'text',
    placeholder: 'title',
    name: title,
  },
  tableContent: {
    value: '',
    label: 'Title',
  },
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const LOCATION = {
  elementType: SELECT,
  elementConfig: {
    name: location,
    options: [
      {value: 'BGC Office', displayValue: 'BGC Office'},
      {value: 'Makati Office', displayValue: 'Makati Office'}
    ]
  },
  tableContent: {
    value: 'BGC Office',
    label: 'Location',
  },
  variety: MEMBER_SELECT,
  validation: {
    required: true,
  },
  valid: true,
  touched: false,
}

const DEPARTMENT = {
  elementType: SELECT,
  elementConfig: {
    name: department,
    options: [
      {value: 'IT', displayValue: 'IT'},
      {value: 'HR', displayValue: 'HR'},
      {value: 'Company Nurse', displayValue: 'Company Nurse'},
      {value: 'Accounting and Finance', displayValue: 'Accounting and Finance'},
      {value: 'Production', displayValue: 'Production'},
      {value: 'Research and Development', displayValue: 'Research and Development'},
      {value: 'Purchasing', displayValue: 'Purchasing'},
      {value: 'Marketing', displayValue: 'Marketing'},
    ]
  },
  tableContent: {
    value: 'IT',
    label: 'Department',
  },
  variety: MEMBER_SELECT,
  validation: {
    required: true,
  },
  valid: true,
  touched: false,
}

const EMPLOYMENT_STATUS = {
  elementType: SELECT,
  elementConfig: {
    name: employmentStatus,
    options: [
      {value: 'Regular', displayValue: 'Regular'},
      {value: 'Contractual', displayValue: 'Contractual'}
    ]
  },
  tableContent: {
    value: 'Contractual',
    label: 'Employment Status',
  },  
  variety: MEMBER_SELECT,
  validation: {},
  valid: true,
  touched: false,
}

const EMPLOYEE_TYPE = {
  elementType: SELECT,
  elementConfig: {
    name: employeeType,
    options: [
      {value: 'Full-time', displayValue: 'Full-time'},
      {value: 'Part-time', displayValue: 'Part-time'},
      {value: 'Casual', displayValue: 'Casual'},
      {value: 'Fixed Term', displayValue: 'Fixed Term'},
      {value: 'Shift Workers', displayValue: 'Shift Workers'},
      {value: 'Daily Hire', displayValue: 'Daily Hire'},
      {value: 'Weekly Hire', displayValue: 'Weekly Hire'},
      {value: 'Probation', displayValue: 'Probation'},
      {value: 'Outworkers', displayValue: 'Outworkers'},
    ]
  },
  tableContent: {
    value: 'Full-time',
    label: 'Employee Type',
  },  
  variety: MEMBER_SELECT,
  validation: {},
  valid: true,
  touched: false,
}

const TEAM = {
  elementType: SELECT,
  elementConfig: {
    name: team,
    options: [
      {value: 'Eikaiwa', displayValue: 'Eikaiwa'},
      {value: 'Engoo', displayValue: 'Engoo'},
      {value: 'Engoo China', displayValue: 'Engoo China'},
      {value: 'DMM', displayValue: 'DMM'},
      {value: 'Ryugaku', displayValue: 'Ryugaku'},
      {value: 'iKnow', displayValue: 'iKnow'},
      {value: 'Mobile', displayValue: 'Mobile'},
    ]
  },
  tableContent: {
    value: 'Eikaiwa',
    label: 'Team',
  },  
  variety: MEMBER_SELECT,
  validation: {},
  valid: true,
  touched: false,
}

const workInformation = {
  title: 'Work Information',
  colspan: '4',
  infoType: WORK_INFO,
  rows: [[ 
    title ,
    location,
    department,
  ], [
    employmentStatus,
    employeeType,
    team
  ]],
  config: {
    [title]:            TITLE,
    [location]:         LOCATION,
    [department]:       DEPARTMENT,
    [employmentStatus]: EMPLOYMENT_STATUS,
    [employeeType]:     EMPLOYEE_TYPE,
    [team]:             TEAM,
  },
  show: false,
}

export default workInformation;

import { INPUT } from '../../forms/FormElements';
import { MEMBER_INPUT } from '../../forms/Input';

// export const firstname   = 'FIRSTNAME';
// export const lastname    = 'LASTNAME';
// export const username    = 'USERNAME';
export const email       = 'email';
export const password    = 'password';

// const FIRST_NAME = {
//   elementType:  INPUT,
//   elementConfig: {
//     type: 'text',
//     placeholder: 'first name',
//     name: firstname,
//   },
//   value: '',
//   label: '',
//   variety: MEMBER_INPUT,
//   validation: {
//     required: true,
//   },
//   valid: false,
//   touched: false,
// }

// const LAST_NAME = {
//   elementType: INPUT,
//   elementConfig: {
//     type: 'text',
//     placeholder: 'last name',
//     name: lastname,
//   },
//   value: '',
//   label: '',
//   variety: MEMBER_INPUT,
//   validation: {
//     required: true,
//   },
//   valid: false,
//   touched: false,
// }

// const USERNAME = {
//   elementType: INPUT,
//   elementConfig: {
//     type: 'text',
//     placeholder: 'username',
//     name: username,
//   },
//   value: '',
//   label: '',
//   variety: MEMBER_INPUT,
//   validation: {
//     required: true,
//   },
//   valid: false,
//   touched: false,
// }

const EMAIL = {
  elementType: INPUT,
  elementConfig: {
    type: 'email',
    placeholder: 'email',
    name: email,
  },
  value: '',
  label: 'Create your beebo hive account',
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const PASSWORD = {
  elementType: INPUT,
  elementConfig: {
    type: 'password',
    placeholder: 'password',
    name: password,
  },
  value: '',
  label: '',
  variety: MEMBER_INPUT,
  validation: {
    required: true,
  },
  valid: false,
  touched: false,
}

const newUserFields = {
  // [firstname]:    FIRST_NAME,
  // [lastname]:     LAST_NAME,
  // [username]:     USERNAME,
  [email]:        EMAIL,
  [password]:     PASSWORD,
}

export default newUserFields;

import { INPUT } from 'src/components/forms/FormElements';
import { MEMBER_INPUT } from 'src/components/forms/Input';

export const email       = 'email';
export const password    = 'password';

const EMAIL = {
  elementType: INPUT,
  elementConfig: {
    type: 'email',
    placeholder: 'email',
    name: email,
  },
  value: '',
  label: 'Login using your email',
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

const loginFields = {
  [email]:     EMAIL,
  [password]:     PASSWORD,
}

export default loginFields;

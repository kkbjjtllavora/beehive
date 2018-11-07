import React, {Component} from 'react';
import Form from '../forms/Form';
import { checkValidity } from '../../utils/validation';
import FormElements from '../forms/FormElements';
import NewUserLink from './NewUserLink';
import AuthLayout from './AuthLayout';
import AuthButton from './AuthButton';
import AuthErrorMessage from './AuthErrorMessage';
import loginFields from './fieldConstants/loginFields';

const initialState = {
  formFields: loginFields,
  isFormValid: false,
}

export default class Login extends Component {
  state = initialState;

  handleChange = (data) => {
    const updatedFormFields = this.state.formFields;
    const key = Object.keys(data).shift();
    const val = data[key];
    const validation = updatedFormFields[key].validation;

    updatedFormFields[key].value = val;
    updatedFormFields[key].valid = checkValidity(val, validation);
    updatedFormFields[key].touched = true;

    let isFormValid = true;
    for(let key in updatedFormFields) {
      isFormValid = updatedFormFields[key].valid && isFormValid;
    }

    this.setState({ 
      isFormValid,
      formFields: updatedFormFields 
    });
  }

  handleSubmit = () => {
    const { email, password } = this.state.formFields;
    this.props.signInUser(email.value, password.value);

    const resetFormFields = this.state.formFields;
    resetFormFields.email.value = '';
    resetFormFields.password.value = '';
    this.setState({ formFields: resetFormFields });
  }

  render() {
    const { isFormValid, formFields } = this.state;
    const formFieldsArray = [];

    for(let key in formFields) {
      formFieldsArray.push({
        id: key,
        config: formFields[key]
      })
    }

    const formFieldsOutput = formFieldsArray.map(({
      id,
      config: {
        elementType,
        elementConfig,
        value,
        label,
        variety,
        valid,
        touched,
      }
    }) => <FormElements
            key={id}
            elementType={elementType}
            elementConfig={elementConfig}
            value={value} 
            label={label}
            variety={variety}
            onChange={this.handleChange}
            valid={valid}
            touched={touched} />
      )

    return (
      <AuthLayout>
        <Form onSubmit={this.handleSubmit}>
          <AuthErrorMessage errMsg={this.props.signinUserError} />

          { formFieldsOutput }

          <AuthButton
            isFormValid={isFormValid}
            isLoading={this.props.isSigninUserLoading}>
              Login
          </AuthButton>

          <NewUserLink />
        </Form>
      </AuthLayout>
    )
  }
}

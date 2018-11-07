import React, { Component } from 'react';
import AuthLayout from 'components/authentication/AuthLayout';
import { checkValidity } from 'utils/validation';
import FormElements from 'components/forms/FormElements';
import Form from 'components/forms/Form';
import BackToLoginLink from 'components/authentication/BackToLoginLink';
import AuthButton from 'components/authentication/AuthButton';
import AuthErrorMessage from 'components/authentication/AuthErrorMessage';
import newUserFields from 'components/authentication/fieldConstants/newUserFields';

const initialState = {
  formFields: newUserFields,
  isFormValid: false,
}

export default class NewUserPage extends Component {
  state = initialState;

  handleSubmit = () => {
    const formData = this.state.formFields;
    const newUserData = {};

    for(let key in formData) {
      newUserData[key] = formData[key].value;
    }

    this.props.addUser(newUserData);

    const resetFormFields = this.state.formFields;
    resetFormFields.email.value = '';
    resetFormFields.password.value = '';
    this.setState({ formFields: resetFormFields });
  }

  onChange = (data) => {
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
            onChange={this.onChange}
            valid={valid}
            touched={touched} />
      )

    const { isAddUserLoading, addUserError } = this.props;

    return (
      <AuthLayout>
        <BackToLoginLink />

        <Form onSubmit={this.handleSubmit}>
          <AuthErrorMessage errMsg={addUserError} />
          
          { formFieldsOutput }

          <AuthButton 
            isFormValid={isFormValid}
            isLoading={isAddUserLoading}>
              Create Account
          </AuthButton>
        </Form>
      </AuthLayout>
    )
  }
}


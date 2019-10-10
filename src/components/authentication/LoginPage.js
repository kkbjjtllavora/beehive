import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from 'components/forms/Form';
import { checkValidity } from 'utils/validation';
import FormElements from 'components/forms/FormElements';
import NewUserLink from 'components/authentication/NewUserLink';
import AuthLayout from 'components/authentication/AuthLayout';
import AuthButton from 'components/authentication/AuthButton';
import AuthErrorMessage from 'components/authentication/AuthErrorMessage';
import loginFields from 'components/authentication/fieldConstants/loginFields';

const initialState = {
  formFields: loginFields,
  isFormValid: false,
}

class LoginPage extends Component {
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

export default LoginPage;

LoginPage.propTypes = {
  signInUser:          PropTypes.func,
  signinUserError:     PropTypes.string,
  isSigninUserLoading: PropTypes.bool,
}

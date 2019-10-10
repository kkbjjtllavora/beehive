import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import FormElements from 'containers/profile/FormElements';
import Button, { MEMBER_BUTTON } from 'components/forms/Button';

const ProfileFormContainer = ({
  isFormComplete,
  formTitle,
  onSubmit,
  onSubmitBackButton,
  formFields,
  isFormValid,
  isInitial,
}) => {

  const formFieldsOutput = formFields.map(({
    id,
    config: {
      elementType,
      elementConfig,
      tableContent: {
        value,
        label,
      },
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
          valid={valid}
          touched={touched} />
    )

  const backButton = !isInitial ? (
    <Button 
      type={'button'} 
      style={BACK_BUTTON_STYLE} 
      variety={MEMBER_BUTTON}
      onClick={onSubmitBackButton}>
      &larr; &nbsp; Back
    </Button>
  ) : null;

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return !isFormComplete ? (
    <div>
      <form className={css(s.FormWrapper)} onSubmit={submitHandler}>
        <div className={css(s.formTitleContainer)}>
          { backButton }      

          <h1 className={css(s.formTitle)}>
            { formTitle }
          </h1>
        </div>

        { formFieldsOutput }
        
        <Button 
          disabled={!isFormValid} 
          variety={MEMBER_BUTTON}>
            Continue &nbsp; &rarr;
        </Button>
      </form>
    </div>
  ) : null;
}

export default ProfileFormContainer;

ProfileFormContainer.propTypes = {
  isFormComplete:     PropTypes.bool,
  formTitle:          PropTypes.string,
  onSubmit:           PropTypes.func,
  onSubmitBackButton: PropTypes.func,
  formFields:         PropTypes.object,
  isFormValid:        PropTypes.bool,
  isInitial:          PropTypes.bool
}

const FORM_WRAP = {
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  float: 'left',
  padding: '0 30px 20px',
  width: '30%',
}

const FORM_TITLE = {
  color: '#34495e',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: '18px',
  paddingTop: '7px',
  marginTop: '8px',
  borderTop: '1px solid #dfe6e9',
}

const BACK_BUTTON_STYLE = {
  width: '100px', 
  padding: '7px 0', 
  position: 'absolute',
  top: '0',
  left: '0',
}

const FORM_TITLE_CONTAINER_STYLE = {
  margin: '0 0 20px 0',
  paddingTop: '50px',
  position: 'relative',
}

const s = StyleSheet.create({
  FormWrapper:          FORM_WRAP,
  formTitle:            FORM_TITLE,
  formTitleContainer:   FORM_TITLE_CONTAINER_STYLE,
});


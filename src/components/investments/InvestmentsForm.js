import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import FormElements from 'components/forms/FormElements';

const CONTAINER_LABEL_STYLE = {
  marginBottom: '15px',
  color: '#7f8c8d',
}

const FORM_CONTAINER_STYLE = {
  width: '30%',
  boxSizing: 'border-box',
  float: 'left',
  paddingRight: '60px',
}

const s = StyleSheet.create({
  formContainer:     FORM_CONTAINER_STYLE,
  containerLabel:    CONTAINER_LABEL_STYLE,
});

export default function InvestmentsForm({
  formFields,
  onChange
}) {
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
          valid={valid}
          touched={touched}
          onChange={onChange} />
  );

  return (
    <div className={css(s.formContainer)}>
      <p className={css(s.containerLabel)}>
        Change your preference
      </p>

      { formFieldsOutput }
    </div>
  )
}

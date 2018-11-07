import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import FieldWrap from '../layouts/FieldWrap';

export const INPUT       = 'INPUT';
export const SELECT      = 'SELECT';
export const TEXTAREA    = 'TEXTAREA';

export default function FormElements({
  elementConfig,
  elementType,
  value,
  valid,
  variety,
  label,
  onChange,
  touched,
}) {
  let formElement = null;

  switch(elementType) {
    case INPUT:
      formElement = <Input  
                      variety={variety}
                      value={value} 
                      onChange={onChange}
                      {...elementConfig} />
      break;

    case SELECT:
      const options = elementConfig.options.map(({
        value,
        displayValue
      }) => <option key={value} value={value}>
              { displayValue }
            </option>
      )

      formElement = <Select
                      name={elementConfig.name}
                      variety={variety}
                      value={value}
                      onChange={onChange}>
                        { options }
                    </Select>
      break;

    default:
      formElement = <Input  
                      variety={variety}
                      value={value}
                      onChange={onChange} 
                      {...elementConfig} />
  }

  return (
    <FieldWrap 
      valid={valid} 
      label={label}
      touched={touched}>
        { formElement }
    </FieldWrap>
  )
}

FormElements.propTypes = {
  elementConfig:    PropTypes.object,
  elementType:      PropTypes.oneOf([
                      INPUT,
                      SELECT,
                      TEXTAREA
                    ]),
  valid:            PropTypes.bool, 
  label:            PropTypes.string,
  variety:          PropTypes.string,
  onChange:         PropTypes.func,
  touched:          PropTypes.bool,
}

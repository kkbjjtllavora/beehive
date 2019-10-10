import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Button, { LOGIN_BUTTON } from 'components/forms/Button'; 
import SpinnerB from 'components/common/SpinnerB';

const styles = StyleSheet.create({
  authButtonContainer: { textAlign: 'center' },
});

const AuthButton = ({
  isLoading,
  isFormValid,
  children,
  classes
}) => {
  const authBtn = <Button disabled={!isFormValid} variety={LOGIN_BUTTON}>
                    { children }
                  </Button> 

  return  (   
      <div className={css(styles.authButtonContainer)}>
        { !isLoading ? authBtn : <SpinnerB /> }
      </div> 
      
  )
}

export default AuthButton;

AuthButton.propTypes = {
  isLoading:   PropTypes.bool,
  isFormValid: PropTypes.bool,
  children:    PropTypes.node.isRequired,
  classes:     PropTypes.object
}

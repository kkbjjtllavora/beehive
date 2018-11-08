import React from 'react';
import injectSheet from 'react-jss';
import Button, { LOGIN_BUTTON } from 'components/forms/Button'; 
import SpinnerB from 'components/common/SpinnerB';

const styles ={
  authButtonContainer: { textAlign: 'center' },
}

const AuthButton = ({
  isLoading,
  isFormValid,
  children,
  classes
}) => {
  return  (
    
      <div className={classes.authButtonContainer}>
        {
          !isLoading ? 
            <Button disabled={!isFormValid} variety={LOGIN_BUTTON}>
              { children }
            </Button> 
          : <SpinnerB />
        }
      </div> 
      
  )
}

export default injectSheet(styles)(AuthButton);

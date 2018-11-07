import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Button, { LOGIN_BUTTON } from 'src/components/forms/Button'; 
import SpinnerB from 'src/components/common/SpinnerB';

const s = StyleSheet.create({
  authButtonContainer: { textAlign: 'center' },
});

export default function AuthButton({
  isLoading,
  isFormValid,
  children
}) {
  return  (
    
      <div className={css(s.authButtonContainer)}>
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

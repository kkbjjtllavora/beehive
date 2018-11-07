import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import Button, { MEMBER_BUTTON, LOGIN_BUTTON } from 'components/forms/Button';
import SpinnerC from 'components/common/SpinnerC';
import ProfilePreviewTable from 'containers/profile/ProfilePreviewTable';

const DEFAULT  = 'DEFAULT';
const COMPLETE = 'COMPLETE';

export default function ProfilePreview({
  tableDatas,
  isFormComplete,
  formData,
  onSaveData,
  isLoadingOnSave,
  isFormSaved,
  backToEditProfile,
  userId,
  addUserDone,
  addUserComplete,
  addUserId
}) {
  const containerClass = !isFormComplete ? DEFAULT : COMPLETE;

  const saveUserId = addUserId ? addUserId : userId;

  const saveButton = isFormComplete ?
    (
      !isLoadingOnSave ? 
        <Button variety={MEMBER_BUTTON} onClick={() => onSaveData(saveUserId, formData)}>
          Save Data
        </Button> 
      : <SpinnerC />
    ) : null;

  const redirectButton = <div>
    <p className={css(s.savedDataAlert)}>
      &#10004; Your data has been saved! 
    </p>
    {
      !addUserDone ? (
        <div>
          <div className={css(s.redirectBtnEdit)}>
            <Button variety={MEMBER_BUTTON} onClick={backToEditProfile}>
              Edit
            </Button>
          </div>

          <div className={css(s.redirectBtnContinue)}>
            <Link to="/">
              <Button variety={LOGIN_BUTTON}>
                Continue to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <Button variety={MEMBER_BUTTON} onClick={addUserComplete}>
          Login to get started
        </Button> 
      )
    }
  </div>

  return (
    <div className={css(s[containerClass])}>
      <div className={css(s.saveDataButtonContainer)}>
        { !isFormSaved ? saveButton : redirectButton }
      </div>

      <div>
        <p className={css(s.completeAlert)}>
          Profile Preview
        </p>

        <p className={css(s.completeAlertSub)}>
          Please review your profile before you proceed
        </p>

      </div> 

      <div className={css(s.innerContainer)}>
        { 
          tableDatas.map((tableData, idx) => {
            return <ProfilePreviewTable  key={idx} tableData={tableData} />
          })
        }
      </div>
    </div>
  )
}

const CONTAINER_STYLE = {
  float: 'left',
  width: '70%',
}

const COMPLETE_STYLE = {
  float: 'left',
  width: '100%',
}

const INNER_CONTAINER_STYLE = {
  background: '#fff',
  border: '1px solid #dfe6e9',
  padding: '30px',
  boxSizing: 'border-box',
  margin: '15px 60px 30px 30px',
}

const COMPLETE_ALERT_STYLE = {
  color: '#34495e',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  margin: '18px 0 0 35px',
  fontSize: '18px',
}

const COMPLETE_ALERT_SUB_STYLE = {
  fontSize: '12px',
  marginLeft: '35px',
  marginBottom: '0',
  textTransform: 'uppercase',
  lineHeight: '1',
  color: '#575e5e',
}

const SAVE_DATA_BUTTON_CONTAINER_STYLE = {
  width: '300px',
  marginRight: '60px',
  float: 'right',
}

const REDIRECT_BUTTON_CONTAINER = {
  marginRight: '10px',
  display: 'inline-block',
}

const REDIRECT_BUTTON_EDIT = {
  ...REDIRECT_BUTTON_CONTAINER,
  width: '30%',
  marginTop: '-10px',
}

const REDIRECT_BUTTON_CONTINUE = {
  ...REDIRECT_BUTTON_CONTAINER,
  width: '60%',
}

const SAVED_DATA_ALERT_STYLE = {
  fontSize: '14px',
  color: '#16a085',
}

const s = StyleSheet.create({
  [DEFAULT]:                 CONTAINER_STYLE,
  [COMPLETE]:                COMPLETE_STYLE,
  innerContainer:            INNER_CONTAINER_STYLE,
  completeAlert:             COMPLETE_ALERT_STYLE,
  completeAlertSub:          COMPLETE_ALERT_SUB_STYLE,
  saveDataButtonContainer:   SAVE_DATA_BUTTON_CONTAINER_STYLE,
  redirectBtnEdit:           REDIRECT_BUTTON_EDIT,
  redirectBtnContinue:       REDIRECT_BUTTON_CONTINUE,
  savedDataAlert:            SAVED_DATA_ALERT_STYLE,
});

import { Record } from 'immutable';
import * as c from './actionTypes';
import ErrorMessages from '../../../constants/ErrorMessages';

const userState = new Record({ 
  idToken:                null,
  localId:                null,
  userData:               {},
  userAttendance:         {},
  addUserError:           null,
  addUserDone:            false,
  addUserId:              null,
  signinUserError:        null,
  expiresIn:              null,
  isAddUserLoading:       false,
  isSigninUserLoading:    false,
}); 

const initialState = new userState();

export const user = (state = initialState, action) => {
  switch(action.type) {
    case c.ADD_USER_START:
      return state.set('isAddUserLoading', true);

    case c.ADD_USER_END:
      return state.merge({
        isAddUserLoading: false,
      });

    case c.ADD_USER_FAIL:
      return state.merge({ 
        addUserError: ErrorMessages[action.error.message],
        isAddUserLoading: false
      });

    case c.REDIRECT_USER_TO_PROFILE_PAGE:
      return state.merge({
        addUserId: action.addUserId,
        addUserDone: true
      });

    case c.AUTH_USER:
      const { idToken, localId, expiresIn } = action;
      return state.merge({ idToken, localId, expiresIn, signinUserError: null });

    case c.AUTH_USER_START:
      return state.set('isSigninUserLoading', true);

    case c.AUTH_USER_END:
      return state.set('isSigninUserLoading', false);
        
    case c.AUTH_USER_FAIL:
      return state.merge({ 
        signinUserError: ErrorMessages[action.error.message],
        isSigninUserLoading: false,
        addUserError: null
      });

    case c.SET_USER_DATA:
      return state.set('userData', action.userData);

    case c.SET_USER_ATTENDANCE:
      return state.set('userAttendance', action.data);

    case c.ADD_USER_COMPLETE:
      return state.set('addUserDone', false);

    case c.LOGOUT_USER:
      return state.clear();

    default:
      return state;
  }
}
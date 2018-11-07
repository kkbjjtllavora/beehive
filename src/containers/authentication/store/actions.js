import moment from 'moment';
import axios from '../../../axios-instance';
import * as c from './actionTypes';
import { ADD_USER_URL, SIGNIN_USER_URL } from '../../../constants/Api';

export const addUserStart = () => ({ 
  type: c.ADD_USER_START 
});

export const addUserEnd = () => ({ 
  type: c.ADD_USER_END 
});

export const addUserFail = (error) => ({
  error,
  type: c.ADD_USER_FAIL
});

export const redirectUserToProfilePage = (addUserId) => ({
  addUserId,
  type: c.REDIRECT_USER_TO_PROFILE_PAGE
});

export const addUserComplete = () => ({
  type: c.ADD_USER_COMPLETE
});

export const submitUser = (userData) => {
  return dispatch => {
    dispatch(addUserStart());

    axios.post(ADD_USER_URL, userData)
      .then(responseX => {
        const { localId } = responseX.data;
        
        dispatch(redirectUserToProfilePage(localId));
        dispatch(addUserEnd());
      })
      .catch(({ responseX }) => dispatch(addUserFail(responseX.data.error)));
  }
};

export const authUserStart = () => ({
  type: c.AUTH_USER_START
});

export const authUserEnd = () => ({
  type: c.AUTH_USER_END
});

export const authUserFail = (error) => ({
  error,
  type: c.AUTH_USER_FAIL
});

export const authUser = (idToken, localId, expiresIn) => ({
  idToken,
  localId,
  expiresIn,
  type: c.AUTH_USER
});

export const setUserAttendance = (data) => ({
  data,
  type: c.SET_USER_ATTENDANCE,
});

export const updateUserAttendance = (userId, data, date, idToken, expiresIn) => {
  return dispatch => {
    axios.put(`/users/${userId}/attendance/${date}.json`, data)
      .then(responseY => {

        axios.get(`/users/${userId}/attendance.json`)
          .then(response => dispatch(setUserAttendance(response.data)))
          .catch(e => console.log(e.error));

        dispatch(authUser(idToken, userId, expiresIn));
        dispatch(authUserEnd());
      })
      .catch(e => console.log(e)); 
  }
}

export const getUserAttendance = (localId, idToken, expiresIn) => {
  return dispatch => {
    const date = moment().format('MM-DD-YY');
    const time = moment().format('hh:mm A');

    const data = {
      timeIn: time,
      loggedIn: true,
    }

    axios.get(`/users/${localId}/attendance/${date}.json`)
      .then(responseX => {
        if(!responseX.data) {
          dispatch(updateUserAttendance(localId, data, date, idToken, expiresIn));
        } else {
          axios.get(`/users/${localId}/attendance.json`)
            .then(response => dispatch(setUserAttendance(response.data)))
            .catch(e => console.log(e.error));

          dispatch(authUser(idToken, localId, expiresIn));
          dispatch(authUserEnd());
        }
      })
      .catch(e => console.log(e));
  }
}

export const setUserData = (userData) => ({
  userData,
  type: c.SET_USER_DATA
});

export const signInUser = (email, password) => {
  return dispatch => {
    dispatch(authUserStart());

    const userData = {
      email,
      password,
      returnSecureToken: true
    }

    axios.post(SIGNIN_USER_URL, userData)
      .then(response => {
        const { idToken, localId, expiresIn } = response.data;

        axios.get(`/users/${localId}.json`)
          .then(responseX => {
            if(responseX.data) {
              dispatch(setUserData(responseX.data.profile));
            }

            dispatch(getUserAttendance(localId, idToken, expiresIn));
          })
          .catch(error => console.log(error));

      })
      .catch(({ response }) => dispatch(authUserFail(response.data.error)));
  }
};

export const logoutUser = () => ({
  type: c.LOGOUT_USER
});

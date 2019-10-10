import _ from 'lodash';
import axios from 'axios-instance';
import * as c from 'containers/dashboard/store/actionTypes';

export const getTeamMembersStart = () => ({
  type: c.GET_TEAM_MEMBERS_START
});

export const getTeamMembersEnd = () => ({
  type: c.GET_TEAM_MEMBERS_END
});

export const getTeamMembersSuccess = (members) => ({
  members,
  type: c.GET_TEAM_MEMBERS_SUCCESS
});

export const setUsers = (users) => ({
  users,
  type: c.SET_USERS
})

export const getTeamMembers = (userTeamName) => {
  return dispatch => {
    dispatch(getTeamMembersStart());

    axios.get('/users.json')
      .then(response => {
        const users = response.data;
        
        const teamMembers = _.filter(users, user => {
          return user.profile && user.profile.workInfo.team === userTeamName; 
        });

        dispatch(getTeamMembersSuccess(teamMembers));
        dispatch(setUsers(users));
        dispatch(getTeamMembersEnd());
      })
      .catch(error => console.log(error));
  }
}

export const resetTeamMembersState = () => ({
  type: c.RESET_TEAM_MEMBERS_STATE
});

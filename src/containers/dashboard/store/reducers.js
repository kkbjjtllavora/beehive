import { Record } from 'immutable';
import * as c from 'containers/dashboard/store/actionTypes';

const teamMembersState = new Record({
  teamMembers:  [],
  users:        {},
  isLoading:    false
});

const initialState = new teamMembersState();

export const teamMembers = (state = initialState, action) => {
  switch(action.type) {
    case c.GET_TEAM_MEMBERS_START:
      return state.set('isLoading', true);

    case c.GET_TEAM_MEMBERS_END:
      return state.set('isLoading', false);

    case c.GET_TEAM_MEMBERS_SUCCESS:
      return state.set('teamMembers', action.members);

    case c.SET_USERS:
      return state.set('users', action.users);

    case c.RESET_TEAM_MEMBERS_STATE:
      return state.clear();

    default:
      return state;
  }
}

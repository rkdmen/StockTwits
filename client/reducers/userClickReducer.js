import * as type from "../constants/ActionTypes";
export function userClickReducer(state = null, action) {
  switch (action.type) {
    case type.GET_USER_MESSAGE:
      return Object.assign({}, state, {
        msgByUser: action.payload.data.messages,
        selectedUser: action.payload.data.user.username
      });

    default:
      return state;
  }
}

import {
  USER_LOG_IN,
  FETCH_USER_PROFILE,
  UPDATE_USER_PROFILE,
  EDIT_CHANGE
} from "../actions";

export default function(
  state = { token: "", profile: {}, edit: false },
  action
) {
  switch (action.type) {
    case USER_LOG_IN:
      return {
        ...state,
        token: action.payload.data.token
      };
    case FETCH_USER_PROFILE:
      return { ...state, profile: action.payload.data.user };
    case UPDATE_USER_PROFILE:
      return state;
    case EDIT_CHANGE:
      return { ...state, edit: !state.edit };
    default:
      return state;
  }
}

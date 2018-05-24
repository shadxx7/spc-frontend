import {
  ADMIN_LOG_IN,
  GET_USER_LIST,
  GET_USER,
  APPROVE_USER
} from "../actions";

export default function(state = { token: "", disabled: false }, action) {
  switch (action.type) {
    case ADMIN_LOG_IN:
      return {
        ...state,
        token: action.payload.data.token
      };
    case GET_USER_LIST:
      return { ...state, list: action.payload.data.userList };
    case GET_USER:
      return {
        ...state,
        user: action.payload.data.user,
        disabled: action.payload.data.user.isAdminVerified
      };
    case APPROVE_USER:
      return { ...state, message: action.payload.data.message };
    default:
      return state;
  }
}

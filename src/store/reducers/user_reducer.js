import {
  USER_LOG_IN,
  FETCH_USER_PROFILE,
  UPDATE_USER_PROFILE,
  LOADING_START,
  LOADING_END,
  EDIT_CHANGE,
  GET_EMPLOYER_LIST
} from "../actions";
import user_employer_list from "../../containers/user/user_employer_list";

export default function(
  state = { token: "", profile: {}, edit: false, loading: false },
  action
) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case USER_LOG_IN:
      return {
        ...state,
        token: action.payload.data.token
      };
    case FETCH_USER_PROFILE:
      return { ...state, profile: action.payload.data.user };
    case UPDATE_USER_PROFILE:
      return { ...state, message: action.payload.data.message };
    case EDIT_CHANGE:
      return { ...state, edit: !state.edit };
    case LOADING_END:
      return { ...state, loading: false };
    case GET_EMPLOYER_LIST:
      return { ...state, list: action.payload.data.companyList };
    default:
      return state;
  }
}

import { LOG_IN, LOADING_START, LOADING_END } from "../actions";

export default function(state = { message: "", loading: false }, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };
    case LOG_IN:
      return {
        ...state,
        message: action.payload.data.message,
        admin: action.payload.data.admin,
        token: action.payload.data.token
      };
    case LOADING_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}

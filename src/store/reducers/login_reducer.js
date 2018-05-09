import { LOG_IN } from "../actions";

export default function(state = { message: "" }, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, message: action.payload.data.message };
    default:
      return state;
  }
}

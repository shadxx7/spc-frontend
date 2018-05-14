import { FORGOT_PASSWORD } from "../actions";

export default function(state = { message: "" }, action) {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return { ...state, message: action.payload.data.message };
    default:
      return state;
  }
}

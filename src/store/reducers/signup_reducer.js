import { SIGN_UP } from "../actions";

export default function(state = { message: "" }, action) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, message: action.payload.data.message };
    default:
      return state;
  }
}

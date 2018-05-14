import { RESET_PASSWORD } from "../actions";

export default function(state = { message: "" }, action) {
  switch (action.type) {
    case RESET_PASSWORD:
      if (action.payload.data === "Server Error. Something Broke!") {
        console.log(action.payload.data);
        return { ...state, message: action.payload.data };
      } else {
        console.log(action.payload.data.message);
        return { ...state, message: action.payload.data.message };
      }
    default:
      return state;
  }
}

import {
  combineReducers
} from "redux";
import signupReducer from "./signup_reducer";
import loginReducer from "./login_reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer
});

export default rootReducer;
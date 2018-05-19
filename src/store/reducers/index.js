import { combineReducers } from "redux";
import signupReducer from "./signup_reducer";
import loginReducer from "./login_reducer";
import fpReducer from "./fp_reducer";
import rpReducer from "./rp_reducer";
import userReducer from "./user_reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  forgot: fpReducer,
  reset: rpReducer,
  user: userReducer
});

export default rootReducer;

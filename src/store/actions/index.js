import axios from "axios";

const ROOT_URL = "http://localhost:5000/";

export const SIGN_UP = "sign_up";
export const LOG_IN = "log_in";
export const FORGOT_PASSWORD = "forgot_password";
export const RESET_PASSWORD = "reset_password";
export const LOADING_START = "loading_start";
export const LOADING_END = "loading_end";

export function signUp(values) {
  return dispatch => {
    dispatch({ type: LOADING_START });
    axios({
      method: "post",
      url: `${ROOT_URL}signup`,
      data: values
    })
      .then(data =>
        dispatch({
          type: SIGN_UP,
          payload: data
        })
      )
      .then(() => {
        dispatch({ type: LOADING_END });
      });
  };
}

export function logIn(values) {
  return dispatch => {
    dispatch({ type: LOADING_START });
    axios({
      method: "post",
      url: `${ROOT_URL}login`,
      data: values
    })
      .then(data =>
        dispatch({
          type: LOG_IN,
          payload: data
        })
      )
      .then(() => {
        dispatch({ type: LOADING_END });
      });
  };
}

export function initFP(values) {
  return dispatch => {
    dispatch({ type: LOADING_START });
    axios({
      method: "post",
      url: `${ROOT_URL}forgotpassword`,
      data: values
    })
      .then(data =>
        dispatch({
          type: FORGOT_PASSWORD,
          payload: data
        })
      )
      .then(() => {
        dispatch({ type: LOADING_END });
      });
  };
}

export function resetPassword(values) {
  return dispatch => {
    dispatch({ type: LOADING_START });
    axios({
      method: "put",
      url: `${ROOT_URL}forgotpassword`,
      data: values
    })
      .then(data =>
        dispatch({
          type: RESET_PASSWORD,
          payload: data
        })
      )
      .then(() => {
        dispatch({ type: LOADING_END });
      });
  };
}

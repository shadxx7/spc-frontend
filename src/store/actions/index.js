import axios from "axios";

const ROOT_URL = "http://localhost:5000/";

export const SIGN_UP = "sign_up";
export const LOG_IN = "log_in";

export function signUp(values) {
  console.log(values);

  const request = axios.post(`${ROOT_URL}signup`, values);

  return dispatch => {
    request.then(data =>
      dispatch({
        type: SIGN_UP,
        payload: data
      })
    );
  };
}

export function logIn(values) {
  console.log(values);

  const request = axios.post(`${ROOT_URL}login`, values);

  return dispatch => {
    request.then(data =>
      dispatch({
        type: LOG_IN,
        payload: data
      })
    );
  };
}
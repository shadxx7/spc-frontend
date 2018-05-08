import axios from "axios";

const ROOT_URL = "http://localhost:5000/";

export const SIGN_UP = "sign_up";

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

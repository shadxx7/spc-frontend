import axios from "axios";

const ROOT_URL = "http://localhost:5000/";

export const SIGN_UP = "sign_up";
export const LOG_IN = "log_in";
export const RESET_PASSWORD = "reset_password";

export function signUp(values) {
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

export function resetPassword(values) {
    const request = axios.put(`${ROOT_URL}insert_api`, values);

    return dispatch => {
        request.then(data =>
            dispatch({
                type: RESET_PASSWORD,
                payload: data
            })
        );
    };
}
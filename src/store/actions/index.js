import axios from "axios";

const ROOT_URL = "http://localhost:5000/";

export const SIGN_UP = "sign_up";
export const LOG_IN = "log_in";
export const FORGOT_PASSWORD = "forgot_password";
export const RESET_PASSWORD = "reset_password";
export const LOADING_START = "loading_start";
export const LOADING_END = "loading_end";
export const ADMIN_LOG_IN = "admin_log_in";
export const USER_LOG_IN = "user_log_in";
export const FETCH_USER_PROFILE = "fetch_user_profile";
export const UPDATE_USER_PROFILE = "update_user_profile";
export const EDIT_CHANGE = "edit_change";
export const GET_USER_LIST = "get_user_list";
export const GET_USER = "get_user";
export const APPROVE_USER = "approve_user";

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
      .then(data => {
        if (data.data.admin) {
          dispatch({ type: ADMIN_LOG_IN, payload: data });
        } else {
          dispatch({ type: USER_LOG_IN, payload: data });
        }
        dispatch({
          type: LOG_IN,
          payload: data
        });
      })
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

export function fetchUserProfile(token) {
  return dispatch => {
    dispatch({ type: LOADING_START });
    axios({
      method: "get",
      url: `${ROOT_URL}profile`,
      headers: { "x-access-token": token }
    })
      .then(data => {
        dispatch({
          type: FETCH_USER_PROFILE,
          payload: data
        });
      })
      .then(() => {
        dispatch({ type: LOADING_END });
      });
  };
}

export function updateUserProfile(values, token) {
  return dispatch => {
    dispatch({ type: LOADING_START });
    axios({
      method: "post",
      url: `${ROOT_URL}profile`,
      data: values,
      headers: { "x-access-token": token }
    })
      .then(data => {
        dispatch({
          type: UPDATE_USER_PROFILE,
          payload: data
        });
      })
      .then(() => {
        dispatch({ type: EDIT_CHANGE });
      })
      .then(() => {
        dispatch({ type: LOADING_END });
      });
  };
}

export function editChange() {
  return dispatch => {
    dispatch({ type: EDIT_CHANGE });
  };
}

export function getUserList(token) {
  return dispatch => {
    axios({
      method: "get",
      url: `${ROOT_URL}profile/list`,
      headers: { "x-access-token": token }
    }).then(data => {
      dispatch({
        type: GET_USER_LIST,
        payload: data
      });
    });
  };
}

export function getUser(sid, token) {
  return dispatch => {
    axios({
      method: "get",
      url: `${ROOT_URL}profile/${sid}`,
      headers: { "x-access-token": token }
    }).then(data => {
      dispatch({
        type: GET_USER,
        payload: data
      });
    });
  };
}

export function approveUser(sid, token) {
  return dispatch => {
    axios({
      method: "put",
      url: `${ROOT_URL}profile/${sid}`,
      headers: { "x-access-token": token }
    }).then(data => {
      dispatch({ type: APPROVE_USER, payload: data });
    });
  };
}

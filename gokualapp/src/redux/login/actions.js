import { CLEAR_USER_DATA, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../helper/constants/login/logincontants";

export const loginRequest = (username) => ({
    type: LOGIN_REQUEST,
    payload: username,
  });
  export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData,
  });
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  export const clearUserData = () => ({
    type: CLEAR_USER_DATA,
  });
  
// Start Logout Api Actions
export const LogoutRequest = () => ({
  type: "LOG_OUT_REQUEST",
});
export const logOutSuccess = (logOutData) => ({
  type: "LOG_OUT_SUCCESS",
  payload: logOutData,
});
export const logOutFailure = (error) => ({
  type: "LOG_OUT_FAILURE",
  payload: error,
});
export const clearLogOutData = () => ({
  type: "CLEAR_LOG_OUT_DATA",
});

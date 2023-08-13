import { all, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { logOutSuccess, logOutFailure, clearLogOutData } from "./action";
import axios from "axios";

function* LogOutSaga() {
  try {
    const authToken = sessionStorage.getItem("auth");
    const user = JSON.parse(sessionStorage.getItem("user"));
    const author = authToken.slice(0, -1).slice(1);
    const storeID = user.storeId;
    const header = {
      headers: {
        Authorization: `Bearer ${author}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Custom-Header": "header value",
      },
    };
    const LogOutData = yield axios.post(
      `${process.env.REACT_APP_LOGIN_API_URL}/api/Account/Logout?logToken=${author}`
    );
    console.log("LogOut", LogOutData.data);
    // Dispatch login success action
    yield put(logOutSuccess(LogOutData.data));
  } catch (error) {
    console.log("List error", error.response);
    yield put(logOutFailure(error));
  }
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", LogOutSaga);
}

export default function* logOutRootSaga() {
  yield all([watchLogOut()]);
}

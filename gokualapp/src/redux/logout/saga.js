


import { logOutFailure, logOutSuccess } from "./actions";
import { all,call, put, takeLatest } from "redux-saga/effects";
import logoutAPI from "../../services/authservice/logoutservice";

function* LogOutSaga() {
  try {
   
    const authToken = sessionStorage.getItem("auth");
    const author = authToken.slice(0, -1).slice(1);
    const logOutData = yield call(logoutAPI, author);
   
    
    yield put(logOutSuccess(logOutData.data));
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

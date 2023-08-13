import { all, call, put, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "./actions";
import loginAPI from "../../services/loginservice";

function* loginSaga(action) {
  try {
  
    const userData = yield call(loginAPI, action.payload);
    sessionStorage.setItem("user", JSON.stringify(userData.data.singleResult));
    sessionStorage.setItem(
      "auth",
      JSON.stringify(userData.data.singleResult.accessToken)
    );
    yield put(loginSuccess(userData.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest("LOGIN_REQUEST", loginSaga);
}



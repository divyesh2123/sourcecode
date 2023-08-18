import { all, call, put, takeLatest } from "redux-saga/effects";
import { packDropdownFailure, packDropdownSuccess } from "./action";
import { getPackDropDownData } from "../../services/packservice/packservice";

function* getPackDropdownSaga() {
    try {
        const getpackData = yield call(getPackDropDownData);
        yield put(packDropdownSuccess(getpackData.data));
    } catch (e) {
      yield put(packDropdownFailure(e.message));
    }
  }

  function* watchPackDropdown() {
    yield takeLatest("PACK_DD_REQUEST", getPackDropdownSaga);
  }
  
  export default function* packRootSaga() {
    yield all([
        watchPackDropdown()
    ]);
  }
import { call, put, takeLatest } from "redux-saga/effects";
import { getSizeDropDownData } from "../../services/size/sizeservice";
import { sizeDropdownFailure, sizeDropdownSuccess } from "./action";

function* getSizeDropdownSaga() {
    try {
        const getSizeData = yield call(getSizeDropDownData);
        yield put(sizeDropdownSuccess(getSizeData.data));
    } catch (e) {
      yield put(sizeDropdownFailure(e.message));
    }
  }

  function* watcSizeDropdown() {
    yield takeLatest("SIZE_DD_REQUEST", getSizeDropdownSaga);
  }
  
  export default function* sizeRootSaga() {
    yield all([
        watcSizeDropdown()
    ]);
  }
import { call, put, takeLatest } from "redux-saga/effects";
import { getCateogryDropDownData } from "../../services/categoryservice/categoryservice";
import { categoryDropdownFailure, categoryDropdownSuccess } from "./action";

function* getCategoryDropdownSaga() {
    try {
        const getSizeData = yield call(getCateogryDropDownData);
        yield put(categoryDropdownSuccess(getSizeData.data));
    } catch (e) {
      yield put(categoryDropdownFailure(e.message));
    }
  }

  function* watcCategoryDropdown() {
    yield takeLatest("CATEGORY_DD_REQUEST", getCategoryDropdownSaga);
  }
  
  export default function* CategoryRootSaga() {
    yield all([
        watcCategoryDropdown()
    ]);
  }
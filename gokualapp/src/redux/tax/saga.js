import { all, call, put, takeEvery } from "redux-saga/effects";
import { TaxDropdownFailure, TaxDropdownSuccess } from "./actions";
import { getTaxDropDownData } from "../../services/taxservice/taxservice";

function* getTaxDropdownSaga() {
    try {
        const gapetTaxDataById = yield call(getTaxDropDownData);
        yield put(TaxDropdownSuccess(gapetTaxDataById.data));
    } catch (e) {
      yield put(TaxDropdownFailure(e.message));
    }
  }

  function* watchGetTaxDropDown() {
    console.log("called");
    yield takeEvery("Tax_DD_REQUEST", getTaxDropdownSaga);
  }

  export default function* taxRootSaga() {
    yield all([
        watchGetTaxDropDown()
    ]);
}
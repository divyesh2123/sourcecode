import { all, call, put, takeEvery } from "redux-saga/effects";
import { getBrandDropDownData } from "../../services/brandservice/brandservice";
import { BrandDropdownFailure, BrandDropdownSuccess } from "./action";


function* getBrandDropdownSaga() {
    try {
        const getBrandData = yield call(getBrandDropDownData);
        yield put(BrandDropdownSuccess(getBrandData.data));
    } catch (e) {
        yield put(BrandDropdownFailure(e.message));
    }
}
export function* watchGetBrandDropDown() {
    yield takeEvery("Brand_DD_REQUEST", getBrandDropdownSaga);
}

export default function* brandRootSaga() {
    yield all([
        watchGetBrandDropDown()
    ]);
}
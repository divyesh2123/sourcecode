import { getSizeDropDownData } from "../../services/size/sizeservice";
import {  getSubCategoryDropDownData } from "../../services/subcategory/subcategoryservice";
import { SubCategoryDdFailed, SubCategoryDdSucess, sizeDropdownSuccess } from "./action";

function* getSizeDropdownSaga(action) {
    try {
        const getSizeData = yield call(getSizeDropDownData, action.payload);
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
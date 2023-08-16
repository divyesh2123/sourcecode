import {  getSubCategoryDropDownData } from "../../services/subcategory/subcategoryservice";
import { SubCategoryDdFailed, SubCategoryDdSucess } from "./action";

function* getSubCategoryDropdownSaga(action) {
    try {
        const getSubCategoryById = yield call(getSubCategoryDropDownData, action.payload);
        yield put(SubCategoryDdSucess(getSubCategoryById.data));
    } catch (e) {
      yield put(SubCategoryDropdownFailure(e.message));
    }
  }

  function* watchSubCategoryDropdown() {
    yield takeLatest("SUB_CATEGORY_DD_REQUEST", getSubCategoryDropdownSaga);
  }
  
  export default function* subCategoryRootSaga() {
    yield all([
        watchSubCategoryDropdown()
    ]);
  }
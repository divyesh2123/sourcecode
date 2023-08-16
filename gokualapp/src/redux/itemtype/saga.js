import { call, put, takeLatest } from "redux-saga/effects";
import { getItemDropDownData } from "../../services/itemtypeservice/itemTypeservice";
import { itemTypeDropdownFailure, itemTypeDropdownSuccess } from "./action";

function* getItemTypeDropdownSaga() {
    try {
        const getpackData = yield call(getItemDropDownData);
        yield put(itemTypeDropdownSuccess(getpackData.data));
    } catch (e) {
      yield put(itemTypeDropdownFailure(e.message));
    }
  }

  function* watchItemTypeDropdown() {
    yield takeLatest("ITEM_TYPE_DD_REQUEST", getItemTypeDropdownSaga);
  }
  
  export default function* itemTypeRootSaga() {
    yield all([
        watchItemTypeDropdown()
    ]);
  }
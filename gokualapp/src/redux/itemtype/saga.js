import { call, put, takeLatest } from "redux-saga/effects";
import { packDropdownFailure, packDropdownSuccess } from "./action";
import { getItemDropDownData } from "../../services/itemtypeservice/itemTypeservice";

function* getItemTypeDropdownSaga() {
    try {
        const getpackData = yield call(getItemDropDownData);
        yield put(packDropdownSuccess(getpackData.data));
    } catch (e) {
      yield put(packDropdownFailure(e.message));
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
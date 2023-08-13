import { all, call, put, takeLatest } from "redux-saga/effects";
import { productListService } from "../../services/product/productservice";
import { productListFailure, productListSuccess } from "./action";


function* getProductListSaga(action) {
  try {
      const productDataList = yield call(productListService);
      yield put(productListSuccess(productDataList.data));
  } catch (e) {
      // Dispatch login failure action
      console.log("e", e);
      yield put(productListFailure(e.message));
  }
}

function* watchProductListSaga() {
  yield takeLatest("PRODUCT_LIST_REQUEST", getProductListSaga);
}

export default function* ProductRootSaga() {
  yield all([
    watchProductListSaga()    

  ]);
}
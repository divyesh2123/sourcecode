import { all } from "redux-saga/effects";
import { watchLogin } from "./login/saga";
import logOutRootSaga from "./logout/saga";
import departmentRootSaga from "./department/saga";
import brandRootSaga from "./brand/saga";
import taxRootSaga from "./tax/saga";
import ProductRootSaga from "./product/saga";
import subCategoryRootSaga from "./subcategory/saga";
import sizeRootSaga from "./size/saga";
import packRootSaga from "./pack/saga";
import itemTypeRootSaga from "./itemtype/saga";
import CategoryRootSaga from "./category/saga";

export default function* rootSaga() {
    yield all([watchLogin(), 
      logOutRootSaga(),
      departmentRootSaga(),
      brandRootSaga(),
      taxRootSaga(),
      ProductRootSaga(),
      subCategoryRootSaga(),
      sizeRootSaga(),
      packRootSaga(),
      itemTypeRootSaga(),
      CategoryRootSaga()
    
    
    ]);
  }
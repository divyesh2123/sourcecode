import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./login/reducers";
import { logOutReducer } from "./logout/reducer";
import { departmentReducer } from "./department/reducers";
import { brandReducer } from "./brand/reducer";
import { taxReducer } from "./tax/reducers";
import { productReducer } from "./product/reducer";
import { subCategoryReducer } from "./subcategory/reducer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    logOutReducer: logOutReducer,
    departmentReducer:departmentReducer,
    brand:brandReducer,
    taxReducer: taxReducer,
    productReducer: productReducer,
    subCategoryReducer: subCategoryReducer
});

export default rootReducer;
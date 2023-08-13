import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../../helper/constants/product/productconstant";

export const productListRequest = (data) => ({
    type: PRODUCT_LIST_REQUEST,
    payload: data,
  });

  export const productListSuccess = (productListData) => ({
    type: PRODUCT_LIST_SUCCESS,
    payload: productListData,
  });
  export const productListFailure = (error) => ({
    type: PRODUCT_LIST_FAILURE,
    payload: error,
  });
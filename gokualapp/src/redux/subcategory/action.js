import { SUB_CATEGORY_DD_FAILURE, SUB_CATEGORY_DD_SUCCESS } from "../../helper/constants/subcategory/subcategory";

export const SubCategoryDdRequest = (data) => ({
  type: SUB_CATEGORY_DD_REQUEST,
  payload: data,
});

export const SubCategoryDdSucess = (data) => ({
  type: SUB_CATEGORY_DD_SUCCESS,
  payload: data,
});


export const SubCategoryDdFailed = (data) => ({
  type: SUB_CATEGORY_DD_FAILURE,
  payload: data,
});
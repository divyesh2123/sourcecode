import { CATEGORY_DD_FAILURE, CATEGORY_DD_REQUEST, CATEGORY_DD_SUCCESS } from "../../helper/constants/category/categoryconstants";

export const categoryDropdownSuccess = (departmentDropdownData) => ({
    type: CATEGORY_DD_SUCCESS,
    payload: departmentDropdownData,
  });

  export const categoryDropdownFailure = (error) => ({
    type: CATEGORY_DD_FAILURE,
    payload: error,
  });

  export const categoryDropdownRequest = (error) => ({
    type: CATEGORY_DD_REQUEST,
    payload: error,
  });
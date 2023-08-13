import { Brand_DD_FAILURE, Brand_DD_REQUEST, Brand_DD_SUCCESS, CLEAR_Brand_DD__DATA } from "../../helper/constants/brand/brandconstants";

export const BrandDropdownRequest = (data) => ({
    type: Brand_DD_REQUEST,
    payload: data,
  });
  export const BrandDropdownSuccess = (BrandDropdownData) => ({
    type: Brand_DD_SUCCESS,
    payload: BrandDropdownData,
  });
  export const BrandDropdownFailure = (error) => ({
    type: Brand_DD_FAILURE,
    payload: error,
  });
  export const clearBrandDataById = () => ({
    type: CLEAR_Brand_DD__DATA,
  });
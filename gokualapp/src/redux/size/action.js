import { SIZE_DD_FAILURE, SIZE_DD_REQUEST, SIZE_DD_SUCCESS } from "../../helper/constants/size/sizecostant";

export const sizeDropdownSuccess = (sizeDropdownData) => ({
    type: SIZE_DD_SUCCESS,
    payload: sizeDropdownData,
  });
  export const sizeDropdownFailure = (error) => ({
    type: SIZE_DD_FAILURE,
    payload: error,
  });

  export const sizeDropdownRequest = () => ({
    type: SIZE_DD_REQUEST,
   
  });
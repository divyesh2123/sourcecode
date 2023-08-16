import { PACK_DD_FAILURE, PACK_DD_REQUEST, PACK_DD_SUCCESS } from "../../helper/constants/pack/packconstant";

export const packDropdownSuccess = (packDropdownData) => ({
    type: PACK_DD_SUCCESS,
    payload: packDropdownData,
  });
  export const packDropdownFailure = (error) => ({
    type: PACK_DD_FAILURE,
    payload: error,
  });

  export const packDropdownRequest = () => ({
    type: PACK_DD_REQUEST,
   
  });
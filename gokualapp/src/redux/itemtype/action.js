import { ITEM_TYPE_DD_FAILURE, ITEM_TYPE_DD_REQUEST, ITEM_TYPE_DD_SUCCESS } from "../../helper/constants/itemtype/itermtypeconstant";

export const itemTypeDropdownSuccess = (itemTypeDropdownData) => ({
    type: ITEM_TYPE_DD_SUCCESS,
    payload: itemTypeDropdownData,
  });
  export const itemTypeDropdownFailure = (error) => ({
    type: ITEM_TYPE_DD_FAILURE,
    payload: error,
  });

  export const itemTypeDropdownRequest = () => ({
    type: ITEM_TYPE_DD_REQUEST,
   
  });
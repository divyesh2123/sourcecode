import { Brand_DD_FAILURE, Brand_DD_SUCCESS } from "../../helper/constants/brand/brandconstants";

const BranddroupListInitialState = {
    brandDropDownData: null,
    error: null,
  };
  export const brandReducer = (
    state = BranddroupListInitialState,
    action
  ) => {
    switch (action.type) {
      case Brand_DD_SUCCESS:
        return {
          ...state,
          brandDropDownData: action.payload,
          error: null,
        };
      case Brand_DD_FAILURE:
        return {
          ...state,
          brandDropDownData: null,
          error: action.payload,
        };
      
      default:
        return state;
    }
  };
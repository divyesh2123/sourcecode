import { Tax_DD_FAILURE, Tax_DD_SUCCESS } from "../../helper/constants/tax/taxconstants";

const TaxInitialState = {
    taxDropDownData: null,
    error: null,
  };
  export const taxReducer = (state = TaxInitialState, action) => {
    switch (action.type) {
      case Tax_DD_SUCCESS:
        return {
          ...state,
          taxDropDownData: action.payload,
          error: null,
        };
      case Tax_DD_FAILURE:
        return {
          ...state,
          taxDropDownData: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
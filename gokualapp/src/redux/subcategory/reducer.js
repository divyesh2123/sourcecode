import { SUB_CATEGORY_DD_FAILURE, SUB_CATEGORY_DD_REQUEST, SUB_CATEGORY_DD_SUCCESS } from "../../helper/constants/subcategory/subcategory";
import { Tax_DD_FAILURE, Tax_DD_SUCCESS } from "../../helper/constants/tax/taxconstants";

const SubCategoryInitialState = {
    SubCatDrop: null,
    error: null,
  };
  export const subCategoryReducer = (state = SubCategoryInitialState, action) => {
    switch (action.type) {
      case SUB_CATEGORY_DD_REQUEST:
        return {
          ...state,
          SubCatDrop: null,
          error: null,
        };
      case SUB_CATEGORY_DD_SUCCESS:
        return {
          ...state,
          SubCatDrop: action.payload,
          error: null,
        };
        case SUB_CATEGORY_DD_FAILURE:
            return {
              ...state,
              SubCatDrop: null,
              error: null,
            };
    
      default:
        return state;
    }
  };
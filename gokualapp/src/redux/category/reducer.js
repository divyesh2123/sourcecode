import { CATEGORY_DD_FAILURE, CATEGORY_DD_SUCCESS } from "../../helper/constants/category/categoryconstants";
import { SIZE_DD_FAILURE, SIZE_DD_SUCCESS } from "../../helper/constants/size/sizecostant";

const categoryInitialState = {
    CategoryDdState: null,
    error: null,
  };
  export const categoryReducer = (state = categoryInitialState, action) => {
    switch (action.type) {
      case CATEGORY_DD_SUCCESS:
        return {
          ...state,
          CategoryDdState: action.payload,
          error: null,
        };
        case CATEGORY_DD_FAILURE:
            return {
              ...state,
              CategoryDdState: null,
              error: null,
            };
    
      default:
        return state;
    }
  };
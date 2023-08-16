import { SIZE_DD_FAILURE, SIZE_DD_SUCCESS } from "../../helper/constants/size/sizecostant";

const sizeInitialState = {
    SizeDdState: null,
    error: null,
  };
  export const sizeReducer = (state = sizeInitialState, action) => {
    switch (action.type) {
      case SIZE_DD_SUCCESS:
        return {
          ...state,
          SizeDdState: action.payload,
          error: null,
        };
        case SIZE_DD_FAILURE:
            return {
              ...state,
              SizeDdState: null,
              error: null,
            };
    
      default:
        return state;
    }
  };
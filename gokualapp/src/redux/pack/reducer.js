import { PACK_DD_FAILURE, PACK_DD_SUCCESS } from "../../helper/constants/pack/packconstant";


const packInitialState = {
    PackDdState: null,
    error: null,
  };
  export const packReducer = (state = packInitialState, action) => {
    switch (action.type) {
      case PACK_DD_SUCCESS:
        return {
          ...state,
          PackDdState: action.payload,
          error: null,
        };
        case PACK_DD_FAILURE:
            return {
              ...state,
              PackDdState: null,
              error: null,
            };
    
      default:
        return state;
    }
  };
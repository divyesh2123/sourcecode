


const itemTypeInitialState = {
    ItemTypeDdState: null,
    error: null,
  };
  export const itemTypeReducer = (state = itemTypeInitialState, action) => {
    switch (action.type) {
      case ITEM_TYPE_DD_SUCCESS:
        return {
          ...state,
          ItemTypeDdState: action.payload,
          error: null,
        };
        case ITEM_TYPE_DD_FAILURE:
            return {
              ...state,
              ItemTypeDdState: null,
              error: null,
            };
    
      default:
        return state;
    }
  };
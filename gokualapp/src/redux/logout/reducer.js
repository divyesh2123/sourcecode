import { CLEAR_LOG_OUT_DATA, LOG_OUT_FAILURE, LOG_OUT_SUCCESS } from "../../helper/constants/logout/logoutcontants";

const LogOutUserInitialState = {
    Data: null,
    error: null,
  };
  
  export const logOutReducer = (state = LogOutUserInitialState, action) => {
    switch (action.type) {
      case LOG_OUT_SUCCESS:
        return {
          ...state,
          Data: action.payload,
          error: null,
        };
      case LOG_OUT_FAILURE:
        return {
          ...state,
          Data: null,
          error: action.payload,
        };
      case CLEAR_LOG_OUT_DATA:
       
        return {
          ...state,
          Data: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
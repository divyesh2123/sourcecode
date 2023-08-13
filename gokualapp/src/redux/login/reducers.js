const initialState = {
    userData: null,
    error: null,
  };
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          userData: action.payload,
          error: null,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          userData: null,
          error: action.payload,
        };
      case "CLEAR_USER_DATA":
        return {
          ...state,
          userData: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
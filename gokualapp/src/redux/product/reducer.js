//Start List Api Reducers prushti

import { CLEAR_PRODUCT_LIST_DATA, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../../helper/constants/product/productconstant";

const ProductReducerInitialState = {
    productData: null,
    isProductListLoadding: false,
    error: null,
  };
  


  
  export const productReducer = (state = ProductReducerInitialState, action) => {
    switch (action.type) {

        case PRODUCT_LIST_REQUEST:
            return {
              ...state,
              isProductListLoadding: true,
             
            };

      case PRODUCT_LIST_SUCCESS:
        return {
          ...state,
          productData: action.payload,
          isProductListLoadding: false,
          error: null,
        };
      case PRODUCT_LIST_FAILURE:
        return {
          ...state,
          productData: null,
          error: action.payload,
          isProductListLoadding: false,
        };
      case CLEAR_PRODUCT_LIST_DATA:
        return {
          ...state,
          productData: null,
          error: null,
          isProductListLoadding: false,
        };
      default:
        return state;
    }
  };
  

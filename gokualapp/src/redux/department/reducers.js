import { CLEAR_DEPARTMENT_ADD_DATA, CLEAR_DEPARTMENT_DEL_DATA, CLEAR_DEPARTMENT_DETAILSBYID_DATA, CLEAR_DEPARTMENT_LIST_DATA, CLEAR_DEPARTMENT_UPDATE_DATA, DEPARTMENT_ADD_FAILURE, DEPARTMENT_ADD_SUCCESS, DEPARTMENT_DD_FAILURE, DEPARTMENT_DD_SUCCESS, DEPARTMENT_DEL_FAILURE, DEPARTMENT_DEL_SUCCESS, DEPARTMENT_DETAILSBYID_FAILURE, DEPARTMENT_DETAILSBYID_SUCESS, DEPARTMENT_LIST_FAILURE, DEPARTMENT_LIST_REQUEST, DEPARTMENT_LIST_SUCCESS, DEPARTMENT_UPDATE_FAILURE, DEPARTMENT_UPDATE_SUCCESS } from "../../helper/constants/department/departmentconstant";

const DepartmentInitialState = {
    departmentData: null,
    isDepartmentListLoadding: false,
    brandDelData: null,
    updateDepartmentData: null,
    addDepartmentData: null,
    getDepartmentDetailsData: null,
    DepartmentDdState: null,
    error: null,
};


export const departmentReducer = (
    state = DepartmentInitialState,
    action
) => {
    switch (action.type) {

        case DEPARTMENT_DD_SUCCESS:

        return {
            ...state,
            DepartmentDdState: action.payload,
            error: null,
        };

       
        case DEPARTMENT_DD_FAILURE:
      return {
        ...state,
        DepartmentDdState: null,
        error: action.payload,
      };


        case DEPARTMENT_LIST_REQUEST:
            return {
                ...state,
                isDepartmentListLoadding: true,
                error: null,
            };

        case DEPARTMENT_LIST_SUCCESS:
            return {
                ...state,
                departmentData: action.payload,
                isDepartmentListLoadding: false,
                error: null,
            };
        case DEPARTMENT_LIST_FAILURE:
            return {
                ...state,
                departmentData: null,
                isDepartmentListLoadding: false,
                error: action.payload,
            };
        case CLEAR_DEPARTMENT_LIST_DATA:
            return {
                ...state,
                error: null,
                departmentData: null,
                isDepartmentListLoadding: false,
                brandDelData: null,
                updateDepartmentData: null,
                addDepartmentData: null,
                getDepartmentDetailsData: null,
                DepartmentDdState: null,
                error: null,
            };

        case DEPARTMENT_ADD_SUCCESS:
            return {
                ...state,
                addDepartmentData: action.payload,
                error: null,
            };
        case DEPARTMENT_ADD_FAILURE:
            return {
                ...state,
                addDepartmentData: null,
                error: action.payload,
            };
        case CLEAR_DEPARTMENT_ADD_DATA:

            return {
                ...state,
                addDepartmentData: null,
                error: null,
            };

        case DEPARTMENT_DEL_SUCCESS:

            return {
                ...state,
                departmentDelData: action.payload,
                error: null,
            };
        case DEPARTMENT_DEL_FAILURE:
            return {
                ...state,
                departmentDelData: null,
                error: action.payload,
            };
        case CLEAR_DEPARTMENT_DEL_DATA:

            return {
                ...state,
                departmentDelData: null,
                error: null,
            };

        case DEPARTMENT_UPDATE_SUCCESS:
            return {
                ...state,
                updateDepartmentData: action.payload,
                error: null,
            };
        case DEPARTMENT_UPDATE_FAILURE:
            return {
                ...state,
                updateDepartmentData: null,
                error: action.payload,
            };
        case CLEAR_DEPARTMENT_UPDATE_DATA:

            return {
                ...state,
                updateDepartmentData: null,
                error: null,
            };

        case DEPARTMENT_DETAILSBYID_SUCESS:
            return {
                ...state,
                getDepartmentDetailsData: action.payload,
                error: null,
            };
        case DEPARTMENT_DETAILSBYID_FAILURE:
            return {
                ...state,
                getDepartmentDetailsData: null,
                error: action.payload,
            };
        case CLEAR_DEPARTMENT_DETAILSBYID_DATA:

            return {
                ...state,
                getDepartmentDetailsData: null,
                error: null,
            };
        default:
            return state;
    }
};






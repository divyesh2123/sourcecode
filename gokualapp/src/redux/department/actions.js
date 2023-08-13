import { CLEAR_DEPARTMENT_ADD_DATA, CLEAR_DEPARTMENT_DEL_DATA, CLEAR_DEPARTMENT_DETAILSBYID_DATA, CLEAR_DEPARTMENT_LIST_DATA, CLEAR_DEPARTMENT_UPDATE_DATA, DEPARTMENT_ADD_FAILURE, DEPARTMENT_ADD_REQUEST, DEPARTMENT_ADD_SUCCESS, DEPARTMENT_DEL_FAILURE, DEPARTMENT_DEL_REQUEST, DEPARTMENT_DEL_SUCCESS, DEPARTMENT_DETAILSBYID_FAILURE, DEPARTMENT_DETAILSBYID_REQUEST, DEPARTMENT_DETAILSBYID_SUCESS, DEPARTMENT_LIST_FAILURE, DEPARTMENT_LIST_REQUEST, DEPARTMENT_LIST_SUCCESS, DEPARTMENT_UPDATE_FAILURE, DEPARTMENT_UPDATE_REQUEST, DEPARTMENT_UPDATE_SUCCESS } from "../../helper/constants/department/departmentconstant";

//list Category Actions
export const departmentListRequest = (data) => ({
    type: DEPARTMENT_LIST_REQUEST,
    payload: data,
});
export const departmentListSuccess = (departmentListData) => ({
    type: DEPARTMENT_LIST_SUCCESS,
    payload: departmentListData,
});
export const departmentListFailure = (error) => ({
    type: DEPARTMENT_LIST_FAILURE,
    payload: error,
});
export const cleardepartmentListData = () => ({
    type: CLEAR_DEPARTMENT_LIST_DATA,
});


export const departmentdAddRequest = (body) => (

    {
        type: DEPARTMENT_ADD_REQUEST,
        payload: body,
    }
);
export const departmentAddSuccess = (departmentAddData) => ({
    type: DEPARTMENT_ADD_SUCCESS,
    payload: departmentAddData,
});
export const departmentAddFailure = (error) => ({
    type: DEPARTMENT_ADD_FAILURE,
    payload: error,
});
export const clearDepartmentAddData = () => ({
    type: CLEAR_DEPARTMENT_ADD_DATA,
});

export const deleteDepartmentReq = (id) => ({
    type: DEPARTMENT_DEL_REQUEST,
    id: id,
});
export const deleteDepartmentSuccess = (departmentListData) => ({
    type: DEPARTMENT_DEL_SUCCESS,
    payload: departmentListData,
});
export const deleteDepartmentFailure = (error) => ({
    type: DEPARTMENT_DEL_FAILURE,
    payload: error,
});
export const cleardeleteDepartmentData = () => ({
    type: CLEAR_DEPARTMENT_DEL_DATA,
});

export const departmentUpdateRequest = (body) => (

    {
        type: DEPARTMENT_UPDATE_REQUEST,
        payload: body,
    }
);
export const departmentUpdateSuccess = (departmentUpdateData) => ({
    type: DEPARTMENT_UPDATE_SUCCESS,
    payload: departmentUpdateData,
});
export const departmentUpdateFailure = (error) => ({
    type: DEPARTMENT_UPDATE_FAILURE,
    payload: error,
});

export const clearDepartmentUpdateData = () => ({
    type: CLEAR_DEPARTMENT_UPDATE_DATA,
});
//UPDATE BY ID
export const getDetailDepartmentReq = (id) => (

    {
        type: DEPARTMENT_DETAILSBYID_REQUEST,
        id: id,
    }
);
export const getDetailDepartmentSucess = (GetDepartmentDetail) => ({
    type: DEPARTMENT_DETAILSBYID_SUCESS,
    payload: GetDepartmentDetail,
});
export const getDetailDepartmentFailure = (error) => ({
    type: DEPARTMENT_DETAILSBYID_FAILURE,
    payload: error,
});
export const clearGetDepartmentDataById = () => ({
    type: CLEAR_DEPARTMENT_DETAILSBYID_DATA,
});



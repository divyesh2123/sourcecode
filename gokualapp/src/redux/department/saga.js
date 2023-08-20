import { all, put, takeLatest, takeEvery, call } from "redux-saga/effects";
import swal from "sweetalert";

import {
    departmentListSuccess,
    departmentListFailure,
    departmentAddSuccess,
    departmentAddFailure,
    cleardepartmentListData,
    deleteDepartmentFailure,
    deleteDepartmentSuccess,
    departmentUpdateSuccess,
    departmentUpdateFailure,
    getDetailDepartmentSucess,
    getDetailDepartmentFailure,
    clearGetDepartmentDataById,
    departmentDropdownSuccess,
    departmentDropdownFailure,
    cleardepartmentDropdownRequest,

} from "./actions";
import axios from "axios";
import { addDepartmentService, delDepartment, departmentList, editDepartment, getDepartmentDetail, getDepartmentDropDownData } from "../../services/department/departmentservice";


function* departmentListSaga(action) {
    try {

        const user = JSON.parse(sessionStorage.getItem("user"));
        const departmentData = yield call(departmentList, user.storeId);
        yield put(departmentListSuccess(departmentData.data));
    } catch (error) {
        yield put(departmentListFailure(error));
        if (yield error.response.status === 504) {
        } else {
            return;
        }
    }
}
function* addDepartmentSaga(action) {
    console.log("function called");
    try {

        const addDepartmentData = yield call(addDepartmentService, action.payload);
        yield put(departmentAddSuccess(addDepartmentData.data));
        if (addDepartmentData.data.status === 200) {

            swal({
                title: "success",
                text: "Department added successfully.",
                icon: "success",
                dangerMode: true,


            } )
            yield put(cleardepartmentListData());
           

        } else {
            return;
        }
        
    } catch (e) {
        yield put(departmentAddFailure(e.message));
    }
}

function* delDepartmentSaga(action) {
    try {

        const delDepartmentData = yield call(delDepartment, action.id);
        yield put(deleteDepartmentSuccess(delDepartmentData.data));
        if (delDepartmentData.data.status === 200) {

            swal({
                title: "success",
                text: "Department Deleted successfully.",
                icon: "success",
                dangerMode: true,

            })

            yield put(cleardepartmentListData());
        } else {
            return;
        }
    } catch (e) {
        yield put(deleteDepartmentFailure(e.message));
    }
}
function* editDepartmentSaga(action) {
    try {

        const editDepartmentData = yield call(editDepartment, action.payload);
        yield put(departmentUpdateSuccess(editDepartmentData.data));
        if (editDepartmentData.data.status === 200) {

            swal({
                title: "success",
                text: "Department Updated successfully.",
                icon: "success",
                dangerMode: true,


            })



            yield put(cleardepartmentListData());
            yield put(clearGetDepartmentDataById());
        } else {
            return;
        }
    } catch (e) {
        yield put(departmentUpdateFailure(e.message));
    }
}

function* getDepartmentDetailSaga(action) {
    try {
        const getDepartmentDataById = yield call(getDepartmentDetail, action.id);
        yield put(getDetailDepartmentSucess(getDepartmentDataById.data));
    } catch (e) {
        // Dispatch login failure action
        console.log("e", e);
        yield put(getDetailDepartmentFailure(e.message));
    }
}

function* getDepartmentDropDownSaga() {
    try {
        const getDepartmentData = yield call(getDepartmentDropDownData);
        yield put(departmentDropdownSuccess(getDepartmentData.data));
    } catch (e) {
        yield put(departmentDropdownFailure(e.message));
    }
}

function* watchDepartmentList() {
    yield takeLatest("DEPARTMENT_LIST_REQUEST", departmentListSaga);
}

function* watchAddDepartment() {
    yield takeLatest("DEPARTMENT_ADD_REQUEST", addDepartmentSaga);
}

function* watchDelDepartment() {
    yield takeLatest("DEPARTMENT_DEL_REQUEST", delDepartmentSaga);
}

function* watchUpdateDepartment(action) {
    yield takeLatest("DEPARTMENT_UPDATE_REQUEST", editDepartmentSaga);
}

function* watchGetDetailDepartment() {
    console.log("watcherFunction");
    yield takeEvery("DEPARTMENT_DETAILSBYID_REQUEST", getDepartmentDetailSaga);
}

function* watchDepartmentDropDown() {
  
    yield takeEvery("DEPARTMENT_DD_REQUEST", getDepartmentDropDownSaga);
}


export default function* departmentRootSaga() {
    yield all([
        watchDepartmentList(),
        watchAddDepartment(),
        watchDelDepartment(),
        watchUpdateDepartment(),
        watchGetDetailDepartment(),
        watchDepartmentDropDown()

    ]);
}

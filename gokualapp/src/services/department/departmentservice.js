import authFetch from '../auth';
import url from '../../helper/url/applicatinoUrl'

export async function departmentList(storeId) {
    const departmentData = authFetch.get(
        `${url.getDepartmentList(storeId)}`,
    );
    return await departmentData;
}

export async function addDepartmentService(payload) {
    const department = authFetch.post(
        `${url.addDepartment}`,
        payload
    );
    return await department;
}

export async function delDepartment(departmentId) {
    const department = authFetch.delete(
        `${url.deleteDepartment(departmentId)}`,
    );
    return await department;
}

export async function editDepartment(payload) {
    const department = authFetch.post(
        `${url.editDepartment}`,
        payload
    );
    return await department;
}

export async function getDepartmentDetail(id) {
    const department = authFetch.get(
        `${url.getDepartmentId(id)}`,
    );
    return await department;
}



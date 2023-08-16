

export default {
        login: `${process.env.REACT_APP_LOGIN_API_URL}/api/Account/login`,
        logout: (author) => {
                return `Account/Logout?logToken=${author}`
        },
        getDepartmentList: (storeId) => {
                return `${process.env.REACT_APP_PRODUCT_API_URL}/api/department/${storeId}/1`
        },
        addDepartment: `${process.env.REACT_APP_PRODUCT_API_URL}/api/department/insert`,
        deleteDepartment: (departmentId) => {

                return `${process.env.REACT_APP_PRODUCT_API_URL}/api/department/delete/${departmentId}`
        },
        editDepartment: `${process.env.REACT_APP_PRODUCT_API_URL}/api/department/update`,
        getDepartmentId: (Id) => {

                return `${process.env.REACT_APP_PRODUCT_API_URL}/api/department/update/${Id}`
        },

        getBrand : `${process.env.REACT_APP_PRODUCT_API_URL}/api/brand/dropdown/1`,
        getTax :  `${process.env.REACT_APP_PRODUCT_API_URL}/api/group/dropdown/tax/1`,
        getProductList : `${process.env.REACT_APP_PRODUCT_API_URL}/api/item/1`,
        getSubCategory :(category) => {

                return `${process.env.REACT_APP_PRODUCT_API_URL}/api/category/dropdown/subcategory/1/${category}`
        },

        getSize : `${process.env.REACT_APP_PRODUCT_API_URL}/api/specification/dropdown/size/1`


}
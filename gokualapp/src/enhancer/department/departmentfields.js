import * as Yup from "yup";
export const departmentField = {
    departmentname: "",
    departmentcodename: "",
    tax: "",
    FoodStamp: false,
    MinAge: false,
    IsTaxabel: false,
    DisplayWEB: false,
    ShowInOpenPrice: false,
    AddItemInBrand: false,
    MakeItemNonRevenue: false,
    MakeItemNonDiscountable: false,
    EnableWICCheckAllowance: false,
    EnableWebItemFlag: false,
    MakeItemNonStock: false,
    EnableWeightItemFlag: false,
    EnableFoodStampAllowance: false,
    MakeItemNoncountable: false,
}

export const departmentValidation = Yup.object({
    departmentname: Yup.string().required("Please Enter Department Name"),
  })
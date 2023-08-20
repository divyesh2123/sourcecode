import * as Yup from "yup";
export const productField = {
    WeightedItem: false,
    NonCountable: false,
    WebItem: false,
    NonRevenue: false,
    AcceptWicCheck: false,
    DepositeItem: false,
    AcceptFoodStamp: false,
    ReturnItem: false,
    CountWithNoDisc: false,
    NonDiscount: false,
    name:  "",
    UPC: "",
    SKU:"",
    department: null
    }


export const productValidation = Yup.object({
    name: Yup.string().required("Please Enter Item Name"),
    UPC: Yup.string()
      .min(11, "Minimum Length should be 11")
      .max(13, "Maximum Length should be 13")
      .required("Please Enter UPC"),
  })
import { getLoginUserData } from "../../../services/authservice/logoutservice";

export function formatBodyDepartment(values,brand,tax,departmentId=0)
{
    return  (
        {
            department: {
              id:departmentId,
              name: values.departmentname,
              code: values.departmentcodename,
              allowFoodStamp: Boolean(values?.FoodStamp),
              isTaxable: Boolean(values?.IsTaxabel),
              taxGroupId: `${values?.IsTaxabel === false ? 0 : tax?.value}`,
              showInOpenPrice: Boolean(values?.ShowInOpenPrice),
              priceRatioType: 0,
              priceRatioValue: values?.textratio,
              ageVerification: Boolean(values?.MinAge),
              pictureId: 0,
              createdBy:  getLoginUserData().userId,
              displayOnWeb: Boolean(values?.DisplayWEB),
              storeId: getLoginUserData().storeId,
            },
            departmentSetting: {
              departmentId: departmentId,
              allowInBrand: Boolean(values?.AddItemInBrand),
              brandId: `${values?.AddItemInBrand === false ? 0 : brand?.value
                }`,
              isNonRevenue: Boolean(values?.MakeItemNonRevenue),
              nonDiscountable: Boolean(values?.MakeItemNonDiscountable),
              nonStock: Boolean(values?.MakeItemNonStock),
              nonCountable: Boolean(values?.MakeItemNoncountable),
              weightItemFlag: Boolean(values?.EnableWeightItemFlag),
              allowWiccheck: Boolean(values?.EnableWICCheckAllowance),
              webItemFlag: Boolean(values?.EnableWebItemFlag),
              isFoodStamp:Boolean(values?.EnableFoodStampAllowance),
            },
          }

    )
}

export function formaFormValueDepartment(result)
{
    return  {

      departmentname: result?.department.name,
      departmentcodename: result?.department.code,
      IsTaxabel: result?.department?.isTaxable?? false,
      AddItemInBrand:  result?.departmentSetting.allowInBrand?? false,
      DisplayWEB: result?.department.displayOnWeb?? false,
      FoodStamp:  result?.department.allowFoodStamp??false,
      MinAge:  result?.department.ageVerification?? false,
      ShowInOpenPrice: result?.department.showInOpenPrice?? false,
      DisplayWEB:  result?.department.displayOnWeb?? false,
      MakeItemNonStock: result?.departmentSetting?.nonStock?? false,
      EnableWebItemFlag:  result?.departmentSetting?.webItemFlag?? false,
      EnableWICCheckAllowance: result?.departmentSetting?.allowWiccheck??false,
      MakeItemNonRevenue: result?.departmentSetting?.isNonRevenue??false,
      EnableFoodStampAllowance:  result?.departmentSetting?.isFoodStamp??false,
      EnableWeightItemFlag:  result?.departmentSetting?.weightItemFlag??false,
      MakeItemNoncountable:result?.departmentSetting?.nonCountable??false,
      MakeItemNonDiscountable: result?.departmentSetting?.nonDiscountable??false,
      AddItemInBrand:  result?.departmentSetting?.allowInBrand??false,
      
      
    }
      
    }
    

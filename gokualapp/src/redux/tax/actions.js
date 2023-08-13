import { CLEAR_Tax_DD__DATA, Tax_DD_FAILURE, Tax_DD_REQUEST, Tax_DD_SUCCESS } from "../../helper/constants/tax/taxconstants";

export const TaxDropdownRequest = (data) => ({
    type: Tax_DD_REQUEST,
    payload: data,
  });
  export const TaxDropdownSuccess = (TaxDropdownData) => ({
    type: Tax_DD_SUCCESS,
    payload: TaxDropdownData,
  });
  export const TaxDropdownFailure = (error) => ({
    type: Tax_DD_FAILURE,
    payload: error,
  });
  export const clearTaxDDDataById = () => ({
    type: CLEAR_Tax_DD__DATA,
  });
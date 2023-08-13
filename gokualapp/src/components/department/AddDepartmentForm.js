import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Select from "react-select";
import { useFormik, FormikProvider } from "formik";
import {
  Row,
  Col,
  FormGroup,
  Input,
  FormFeedback,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import { clearGetDepartmentDataById, departmentUpdateRequest, departmentdAddRequest, getDetailDepartmentReq } from "../../redux/department/actions";
import { TaxDropdownRequest } from "../../redux/tax/actions";
import { BrandDropdownRequest } from "../../redux/brand/action";
import { departmentField, departmentValidation } from "../../enhancer/department/departmentfields";
import { formaFormValueDepartment, formatBodyDepartment } from "../../helper/format/department/departmentFormat";



const AddDepartmentForm = (props) => {


  const dispatch = useDispatch();
  const taxDropDownList = useSelector((state) => state?.taxReducer);
  const brandDropDownList = useSelector((state) => state?.brand);
  const getDepartmentDetailsData = useSelector((state) => state?.departmentReducer?.getDepartmentDetailsData);
  const [sortBy, setsortBy] = useState(null);
  const [sortByBrand, setsortByBrand] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false);


  console.log(getDepartmentDetailsData);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: departmentField,
    validationSchema: departmentValidation,
    onSubmit: (values) => {
      departmentSubmit(values);
    },
  });


  useEffect(() => {
    if (taxDropDownList.taxDropDownData === null && taxDropDownList.error === null) {
      dispatch(TaxDropdownRequest());
    }
    if (
      brandDropDownList.brandDropDownData === null &&
      brandDropDownList.error === null
    ) {

      dispatch(BrandDropdownRequest());
    }

    if (getDepartmentDetailsData?.singleResult !== null) {

      validation.setValues(formaFormValueDepartment(getDepartmentDetailsData?.singleResult))
      setsortByBrand(getDepartmentDetailsData?.singleResult?.departmentSetting?.drdwnBrand);
      setsortBy(getDepartmentDetailsData?.singleResult?.department?.drdwnGroupTax);

    }
    else {
      validation.setValues(formaFormValueDepartment({}))
    }
  }, [taxDropDownList, brandDropDownList, getDepartmentDetailsData,props.editID]);

  useEffect(() => {



    if (props.editID != null) {

      GetDataByID();

    }

  }, [props.editID]);


  const GetDataByID = () => {
    

    dispatch(getDetailDepartmentReq(props.editID));


  };






  const departmentSubmit = (values) => {


    if (props.editID != null) {

      dispatch(
        departmentUpdateRequest(
          formatBodyDepartment(values, sortByBrand, sortBy,props.editID)
  
        )
      );

    }
    else
    {
    dispatch(
      departmentdAddRequest(
        formatBodyDepartment(values, sortByBrand, sortBy)

      )
    );

    }
   
    validation.resetForm();
    setsortByBrand(null);
    setsortBy(null);
    props.setEditID(null)
    props.handlecloseModel();
  };
  const handleTaxChange = (selectedYear) => {
    console.log(selectedYear);
    setsortBy(selectedYear);
  };
  const handleBrandChange = (selectedBrand) => {
    console.log(selectedBrand);
    setsortByBrand(selectedBrand);
  };



  const handleIsTaxabelChange = (event) => {
    setCheckboxChecked(event.target.checked);
    validation.setFieldValue("IsTaxabel", event.target.checked);
    validation.setFieldValue("taxgroup1", "");
  };


  const handleAddItemInBrand = (event) => {
    setCheckboxChecked(event.target.checked);
    validation.setFieldValue("AddItemInBrand", event.target.checked);
    validation.setFieldValue("taxgroup1", "");
  };


  return (
    <Modal  isOpen={props.show} >

      <ModalHeader>
      <h5 className="text-center text-light">
                  {props.editID != null ? "Edit Department Information" : "Add Department Information"}
                </h5>

      </ModalHeader>

<ModalBody>
      <FormikProvider value={validation}>
          
              <Form
                className="tablelist-form needs-validation"
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
             
                  <Row>
                    <Col md="12">
                      <FormGroup className="mb-0">
                        <label htmlFor="departmentname" className="text-dark">
                          Department Name
                        </label>
                        <Input
                          name="departmentname"
                          type="text"
                          className="form-control"
                          style={{ background: "#f5f5dc" }}
                          id="departmentname"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.departmentname || ""}
                          invalid={
                            !!(
                              validation.touched.departmentname &&
                              validation.errors.departmentname
                            )
                          }
                        />
                        {validation.touched.departmentname &&
                          validation.errors.departmentname ? (
                          <FormFeedback type="invalid">
                            {validation.errors.departmentname}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup className="mb-0">
                        <label htmlFor="departmentname" className="text-dark">
                          Department Code
                        </label>
                        <Input
                          name="departmentcodename"
                          type="text"
                          className="form-control"
                          id="departmentcodename"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.departmentcodename || ""}
                          invalid={
                            !!(
                              validation.touched.departmentcodename &&
                              validation.errors.departmentcodename
                            )
                          }
                        />
                        {validation.touched.departmentcodename &&
                          validation.errors.departmentcodename ? (
                          <FormFeedback type="invalid">
                            {validation.errors.departmentcodename}
                          </FormFeedback>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>{" "}
                  <Row>
                    <Col md="6">
                      <Row>
                        <FormGroup>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="FoodStamp"
                            name="FoodStamp"
                            onChange={validation.handleChange}
                            value={validation.values.FoodStamp}
                            checked={validation.values.FoodStamp}
                          />
                          <label
                            className="form-check-label text-dark ms-3 mt-1"
                            htmlFor="FoodStamp"
                          >
                            Allow Food Stamp
                          </label>
                        </FormGroup>
                      </Row>
                      <Row>
                        <FormGroup>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="MinAge"
                            name="MinAge"
                            onChange={validation.handleChange}
                            value={validation.values.MinAge}
                            checked={validation.values.MinAge}
                          />
                          <label
                            className="form-check-label text-dark ms-3 mt-1"
                            htmlFor="MinAge"
                          >
                            Min. Age
                          </label>
                        </FormGroup>
                      </Row>
                      <Row>
                        <FormGroup>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="IsTaxabel"
                            name="IsTaxabel"
                            onChange={handleIsTaxabelChange}
                            value={validation.values.IsTaxabel}
                            checked={validation.values.IsTaxabel}
                          />
                          <label
                            className="form-check-label text-dark ms-3 mt-1"
                            htmlFor="IsTaxabel"
                          >
                            Is Taxable
                          </label>
                        </FormGroup>
                      </Row>
                    </Col>

                    <Col md="6">
                      <Row>
                        <FormGroup>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="ShowInOpenPrice"
                            name="ShowInOpenPrice"
                            onChange={validation.handleChange}
                            value={validation.values.ShowInOpenPrice}
                            checked={validation.values.ShowInOpenPrice}
                          />
                          <label
                            className="form-check-label text-dark ms-3 mt-1"
                            htmlFor="ShowInOpenPrice"
                          >
                            Show In Open Price
                          </label>
                        </FormGroup>
                      </Row>
                      <Row>
                        <FormGroup>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="DisplayWEB"
                            name="DisplayWEB"
                            onChange={validation.handleChange}
                            value={validation.values.DisplayWEB}
                            checked={validation.values.DisplayWEB}
                          />
                          <label
                            className="form-check-label text-dark ms-3 mt-1"
                            htmlFor="DisplayWEB"
                          >
                            Display On Web
                          </label>
                        </FormGroup>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup className="mb-0">


                            <Select
                              value={sortBy}
                              onChange={(sortBy) => {
                                handleTaxChange(sortBy);
                                setsortBy(sortBy);
                              }}
                              options={
                                taxDropDownList?.taxDropDownData?.listResult === null
                                  ? ""
                                  : taxDropDownList?.taxDropDownData?.listResult
                              }
                              id="taxgroup1"
                              className="js-example-basic-single mb-0 text-dark"
                              name="taxgroup1"

                              isDisabled={!validation.values.IsTaxabel}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="mt-1 text-gokul-blue">
                    <p>Settings</p>
                  </div>
                  <Row>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="MakeItemNonStock"
                          name="MakeItemNonStock"
                          onChange={validation.handleChange}
                          value={validation.values.MakeItemNonStock}
                          checked={validation.values.MakeItemNonStock}
                        />
                        <label
                          className="form-check-label text-dark ms-3 mt-1"
                          htmlFor="MakeItemNonStock"
                        >
                          Make Item Non-Stock
                        </label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="EnableWebItemFlag"
                          name="EnableWebItemFlag"
                          onChange={validation.handleChange}
                          value={validation.values.EnableWebItemFlag}
                          checked={validation.values.EnableWebItemFlag}
                        />
                        <label
                          className="form-check-label text-dark ms-3 mt-1"
                          htmlFor="EnableWebItemFlag"
                        >
                          Enable Web-Item Flag
                        </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="EnableWICCheckAllowance"
                          name="EnableWICCheckAllowance"
                          onChange={validation.handleChange}
                          value={validation.values.EnableWICCheckAllowance}
                          checked={validation.values.EnableWICCheckAllowance}
                        />
                        <label
                          className="form-check-label text-dark ms-3 mt-1"
                          htmlFor="EnableWICCheckAllowance"
                        >
                          Enable WIC Check Allowance
                        </label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="MakeItemNonDiscountable"
                          name="MakeItemNonDiscountable"
                          onChange={validation.handleChange}
                          value={validation.values.MakeItemNonDiscountable}
                          checked={validation.values.MakeItemNonDiscountable}
                        />
                        <label
                          className="form-check-label text-dark ms-3 mt-1"
                          htmlFor="MakeItemNonDiscountable"
                        >
                          Make Item Non-Discountable
                        </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="MakeItemNoncountable"
                          name="MakeItemNoncountable"
                          onChange={validation.handleChange}
                          value={validation.values.MakeItemNoncountable}
                          checked={validation.values.MakeItemNoncountable}
                        />
                        <label
                          className="form-check-label text-dark ms-3 mt-1"
                          htmlFor="MakeItemNoncountable"
                        >
                          Make Item Non-Countable
                        </label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="EnableWeightItemFlag"
                          name="EnableWeightItemFlag"
                          onChange={validation.handleChange}
                          value={validation.values.EnableWeightItemFlag}
                          checked={validation.values.EnableWeightItemFlag}
                        />
                        <label
                          className="form-check-label text-dark ms-3 mt-1"
                          htmlFor="EnableWeightItemFlag"
                        >
                          Enable Weight Item Flag
                        </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="EnableFoodStampAllowance"
                          name="EnableFoodStampAllowance"
                          onChange={validation.handleChange}
                          value={validation.values.EnableFoodStampAllowance}
                          checked={validation.values.EnableFoodStampAllowance}
                        />
                        <label
                          className="form-check-label text-dark ms-2 mt-1"
                          htmlFor="EnableFoodStampAllowance"
                        >
                          Enable FoodStamp Allowance
                        </label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="MakeItemNonRevenue"
                          name="MakeItemNonRevenue"
                          onChange={validation.handleChange}
                          value={validation.values.MakeItemNonRevenue}
                          checked={validation.values.MakeItemNonRevenue}
                        />
                        <label
                          className="form-check-label text-dark ms-3 mt-1"
                          htmlFor="MakeItemNonRevenue"
                        >
                          Make Item Non-Revenue
                        </label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="AddItemInBrand"
                          name="AddItemInBrand"
                          onChange={handleAddItemInBrand}
                          value={validation.values.AddItemInBrand}
                          checked={validation.values.AddItemInBrand}
                        />
                        <label
                          className="form-check-label text-dark ms-3 mt-1"
                          htmlFor="AddItemInBrand"
                        >
                          Add Item In Brand
                        </label>
                      </FormGroup>
                    </Col>

                    <Col>
                      <FormGroup className="mb-0">
                        <Select
                          value={sortByBrand}
                          onChange={(sortByBrand) => {
                            handleBrandChange(sortByBrand);
                            setsortByBrand(sortByBrand);
                          }}
                          options={
                            brandDropDownList?.brandDropDownData?.listResult === null
                              ? ""
                              : brandDropDownList?.brandDropDownData?.listResult
                          }
                          id="brandgroup"
                          className="js-example-basic-single mb-0 text-dark"
                          name="brandgroup"
                          isDisabled={!validation.values.AddItemInBrand}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
               

                  <ModalFooter>
                  
                    <button
                      type="submit"
                      className="btn custom-Green add-btn"
                    >
                      Save
                    </button>
                    <button
                      className="btn custom-Red btn-exit"  
                      type="reset"
                      onClick={() => {

                        props.setEditID(null)
                        validation.resetForm();
                        setsortByBrand(null);
                        setsortBy(null);
                        dispatch(clearGetDepartmentDataById())
                        props.handlecloseModel();
                      
                      }}
                    >
                      Close
                    </button>
                 
                </ModalFooter>
              </Form>
          
         
        
      </FormikProvider>

      </ModalBody>
      </Modal>
  );
};

export default AddDepartmentForm;

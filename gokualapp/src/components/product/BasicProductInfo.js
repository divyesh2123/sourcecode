import React, { useState, useEffect } from "react";
import { Col, FormFeedback, FormGroup, Input, Row } from "reactstrap";
import Select from "react-select";
import DepartmentModal from "../shared/DepartmentModal";
import { useDispatch, useSelector } from "react-redux";
import { TaxDropdownRequest } from "../../redux/tax/actions";
import { BrandDropdownRequest } from "../../redux/brand/action";
import { departmentDropdownRequest } from "../../redux/department/actions";
import { sizeDropdownRequest } from "../../redux/size/action";
import { packDropdownRequest } from "../../redux/pack/action";
import { itemTypeDropdownRequest } from "../../redux/itemtype/action";
import { categoryDropdownRequest } from "../../redux/category/action";
import { SubCategoryDdRequest } from "../../redux/subcategory/action";

const BasicProductForm = (props) => {
    const {formik} = props;

    const dispatch = useDispatch();

    const taxDropDownList = useSelector((state) => state?.taxReducer);
    const brandDropDownList = useSelector((state) => state?.brand);
    const departmentDropDownList = useSelector((state) => state?.departmentReducer);
    const sizeDropDownList = useSelector((state) => state?.sizeReducer);
    const packDropDownList = useSelector((state) => state?.packReducer);
    const itemTypeDropDownList = useSelector((state) => state?.itemType);
    const categoryDownList = useSelector((state) => state?.cateogry);
    const subCategoryDownList = useSelector((state) => state?.subCategoryReducer);

    const [isaddNewItemDepartment, setaddNewItemDepartment] = useState(false);
    const handleAddNew = () => {

    }

    useEffect(() => {

        if (taxDropDownList.taxDropDownData === null &&
          taxDropDownList.error === null) {
          dispatch(TaxDropdownRequest());
        }
        if (
          brandDropDownList.brandDropDownData === null &&
          brandDropDownList.error === null
        ) {
    
          dispatch(BrandDropdownRequest());
        }
    
        if (
          departmentDropDownList.DepartmentDdState === null &&
          departmentDropDownList.error === null
        ) {
    
          dispatch(departmentDropdownRequest());
        }
    
        if (
          sizeDropDownList.SizeDdState === null &&
          sizeDropDownList.error === null
        ) {
    
          dispatch(sizeDropdownRequest());
        }
    
        if (
          packDropDownList.PackDdState === null &&
          packDropDownList.error === null
        ) {
    
          dispatch(packDropdownRequest());
        }
    
        if (
          itemTypeDropDownList.ItemTypeDdState === null &&
          itemTypeDropDownList.error === null
        ) {
    
          dispatch(itemTypeDropdownRequest());
        }
    
        if (
          categoryDownList.CategoryDdState === null &&
          categoryDownList.error === null
        ) {
    
          dispatch(categoryDropdownRequest());
        }
    
        if (
          subCategoryDownList.SubCatDrop === null &&
          subCategoryDownList.error === null
        ) {
    
          dispatch(SubCategoryDdRequest(0));
        }
    
    
    
    
    
      }, [departmentDropDownList])

  
    const handleClose = () => {

        setaddNewItemDepartment(false);
      }
    const setDepartment = (department) => {
        formik.setFieldValue("department", department)
    }

    const handleKeyDown = (event) => {

    };

    const handleTaxChange = (e) => {


    };
  
    const handleChangeTab = (i) => {
  
    };
  
    const handleSizeChange = (e) => {
  
    };
  
    const handlePackChange = (e) => {
  
    };
  
  
  
    const handleCategoryChange = (e) => {
  
  
    };
    const handleSubCategoryChange = (e) => {
  
    };
  
    const handleItemTypeChange = (e) => {
  
    };

    return (
        <>

            <Row>
                <Col md="3">
                    <FormGroup>
                        <label htmlFor="UPC " className="text-dark">
                            UPC
                        </label>
                        <Input
                            name="UPC"

                            type="number"
                            className="form-control"

                            id="UPC"
                            onKeyDown={handleKeyDown}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.UPC}
                            invalid={!!(formik.touched.UPC && formik.errors.UPC)}
                        />
                        {formik.touched.UPC && formik.errors.UPC ? (
                            <FormFeedback type="invalid">
                                {formik.errors.UPC}
                            </FormFeedback>
                        ) : null}
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <label htmlFor="name " className="text-dark">
                            Name
                        </label>
                        <Input
                            name="name"

                            type="text"
                            className="form-control"
                            style={{ background: "#f5f5dc" }}
                            id="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            invalid={
                                !!(formik.touched.name && formik.errors.name)
                            }
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <FormFeedback type="invalid">
                                {formik.errors.name}
                            </FormFeedback>
                        ) : null}
                    </FormGroup>
                </Col>

                <Col md="2">
                    <FormGroup>
                        <label htmlFor="Department" className="text text-dark">
                            Department
                        </label>

                        <a

                            onClick={() => {
                                setaddNewItemDepartment(true)
                            }}
                            className="custom-float-right"
                        >
                            Add New
                        </a>


                        <Select
                            value={formik.values.department}
                            onBlur={formik.handleBlur}
                            onChange={(e) => {


                            }}
                            options={departmentDropDownList?.DepartmentDdState?.listResult ?? []}
                            id="department1"
                            className="js-example-basic-single mb-0 text-dark "
                            name="department"
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <label htmlFor="Category" className="text text-dark">
                            Category
                        </label>

                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLabel33"
                            className="custom-float-right"
                        >
                            Add New
                        </a>



                        <Select
                            value={formik.values.category}
                            onBlur={formik.handleBlur}
                            onChange={(e) => {

                                formik.handleChange("category");
                            }}
                            options={categoryDownList?.CategoryDdState?.listResult ?? []}
                            id="category"
                            className="js-example-basic-single mb-0 text-dark "
                            name="category"
                        />
                    </FormGroup>
                </Col>

                <Col md="2">
                    <FormGroup>
                        <label htmlFor="SubCategory" className="text text-dark">
                            Sub Category
                        </label>

                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLabel33"
                            className="custom-float-right"
                        >
                            Add New
                        </a>



                        <Select
                            value={formik.values.subcategory}
                            onBlur={formik.handleBlur}
                            onChange={(e) => {
                                handleSubCategoryChange(e);
                                formik.handleChange("subCategory");
                            }}
                            options={subCategoryDownList.SubCatDrop?.listResult ?? []}
                            id="subCategory"
                            className="js-example-basic-single mb-0 text-dark "
                            name="subCategory"
                        />
                    </FormGroup>
                </Col>

            </Row>
            <Row>

                <Col md="2">
                    <FormGroup>
                        <label htmlFor="ItemType" className="text text-dark">
                            Item Type
                        </label>
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLabel33"
                            className="custom-float-right"
                        >
                            Add New
                        </a>



                        <Select
                            value={formik.values.itemType}
                            onBlur={formik.handleBlur}
                            onChange={(e) => {
                                handleItemTypeChange(e);
                                formik.handleChange("itemType");
                            }}
                            options={itemTypeDropDownList?.ItemTypeDdState?.listResult ?? []}
                            id="itemType"
                            className="js-example-basic-single mb-0 text-dark "
                            name="itemType"
                        />
                    </FormGroup>
                </Col>

                <Col md="2">
                    <FormGroup>
                        <label htmlFor="Tax" className="text-dark">
                            Tax
                        </label>
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLabel33"
                            className="custom-float-right"
                        >
                            Add New
                        </a>
                        <Select
                            name="Tax"
                            type="text"
                            className="js-example-basic-single mb-0 text-dark "
                            id="Tax"
                            value={formik.values.tax}
                            options={taxDropDownList?.taxDropDownData?.listResult ?? []}
                            onChange={(e) => {
                                handleTaxChange(e);
                            }}

                        />
                    </FormGroup>
                </Col>

                <Col md="2">
                    <FormGroup >



                        <label htmlFor="Brand" className="text text-dark">
                            Brand
                        </label>

                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLabel33"
                            className="custom-float-right"
                        >
                            Add New
                        </a>
                        <Select
                            value={formik.values.brand}
                            onChange={(sortByBrand) => {

                            }}
                            options={
                                brandDropDownList?.brandDropDownData?.listResult === null
                                    ? ""
                                    : brandDropDownList?.brandDropDownData?.listResult
                            }
                            id="brandgroup"
                            className="js-example-basic-single mb-0 text-dark"
                            name="brandgroup"

                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <label htmlFor="SKU" className="text-dark">
                            Vintage
                        </label>
                        <Input
                            name="Vintage"
                            // placeholder="SKU"
                            type="text"
                            className="form-control"
                            //style={{ background: "#f5f5dc" }}
                            id="Vintage"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Vintage}
                            readOnly
                        />
                    </FormGroup>
                </Col>





                <Col md="4">

                    <FormGroup check
                        inline >
                        <input
                            className="form-check-input mt-4"
                            type="checkbox"
                            id="Inactive"
                            name="Inactive"
                        // value={}
                        // onChange={}
                        />
                        <label
                            className="form-check-label text-dark ms-3 mt-4"
                            htmlFor="Inactive"
                        >
                            Inactive
                        </label>
                    </FormGroup>
                    <FormGroup check
                        inline>
                        <input
                            className="form-check-input mt-4"
                            type="checkbox"
                            id="Inactive"
                            name="Inactive"
                        // value={}
                        // onChange={}
                        />
                        <label
                            className="form-check-label
       text-dark ms-3 mt-4"
                            htmlFor="Inactive"
                        >
                            Prompt For Quantity
                        </label>
                    </FormGroup>

                    <FormGroup check
                        inline>
                        <input
                            className="form-check-input mt-4"
                            type="checkbox"
                            id="Inactive"
                            name="Inactive"
                        // value={}
                        // onChange={}
                        />
                        <label
                            className="form-check-label text-dark ms-3 mt-4"
                            htmlFor="Inactive"
                        >
                            Promotion For Price
                        </label>
                    </FormGroup>

                    <FormGroup check
                        inline>
                        <input
                            className="form-check-input mt-4"
                            type="checkbox"
                            id="Inactive"
                            name="Inactive"
                        // value={}
                        // onChange={}
                        />
                        <label
                            className="form-check-label 
      text-dark ms-3 mt-4"
                            htmlFor="Inactive"
                        >
                            Non Stock Item
                        </label>
                    </FormGroup>
                </Col>




            </Row>
            <Row>

                <Col md="2">
                    <FormGroup>
                        <label htmlFor="Size" className="text text-dark">
                            Size
                        </label>

                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLabel33"
                            className="custom-float-right"
                        >
                            Add New
                        </a>


                        <Select
                            value={formik.values.size}
                            onBlur={formik.handleBlur}
                            onChange={(e) => {
                                handleSizeChange(e);
                                formik.handleChange("size");
                            }}
                            options={sizeDropDownList?.SizeDdState?.listResult
                                ?? []}
                            id="size"
                            className="js-example-basic-single mb-0 text-dark "
                            name="size"
                        />
                    </FormGroup>
                </Col>
                <Col md="2">
                    <FormGroup>
                        <label htmlFor="Pack" className="text text-dark">
                            Pack
                        </label>

                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLabel33"
                            className="custom-float-right"
                        >
                            Add New
                        </a>




                        <Select
                            value={formik.values.pack}
                            onBlur={formik.handleBlur}
                            onChange={(e) => {
                                handlePackChange(e);
                                formik.handleChange("pack");
                            }}
                            options={packDropDownList?.PackDdState?.listResult
                                ?? []
                            }
                            id="pack"
                            className="js-example-basic-single mb-0 text-dark "
                            name="pack"
                        />
                    </FormGroup>
                </Col>







            </Row>

            <DepartmentModal
          isopen={isaddNewItemDepartment}
          handleClose={handleClose}
          handelSelect={setDepartment}
        ></DepartmentModal>


        </>








    );
};

export default BasicProductForm;

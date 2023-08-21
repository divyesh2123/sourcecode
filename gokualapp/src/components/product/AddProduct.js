import React, { useState, useEffect } from "react";
import { productField, productValidation } from "../../enhancer/product/productfields";
import { useFormik, FormikProvider } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import Select from "react-select";
import Cleave from "cleave.js/react";
import { ItemTypeGroup } from "../../helper/data/superAdminData";
import { BrandDropdownRequest } from "../../redux/brand/action";
import { departmentDropdownRequest } from "../../redux/department/actions";
import { sizeDropdownRequest } from "../../redux/size/action";
import { packDropdownRequest } from "../../redux/pack/action";
import { itemTypeDropdownRequest } from "../../redux/itemtype/action";
import { categoryDropdownRequest } from "../../redux/category/action";
import { SubCategoryDdRequest } from "../../redux/subcategory/action";
import { TaxDropdownRequest } from "../../redux/tax/actions";
import ManageDepartment from "../../pages/ManageDepartment/ManageDepartment";
import DepartmentModal from "../shared/DepartmentModal";

const AddProductForm = (props) => {

  const dispatch = useDispatch();

  const [unitPTable, setUnitPTable] = useState([]);
  const [barcodeData, setBarcodeData] = useState([]);
  const [itemMap, setItemMap] = useState([]);
  const [itemIndex, setItemIndex] = useState(0);
  const [itemStock, setItemStock] = useState([]);
  const [updatedStockData, setUpdatedStockData] = useState([]);
  const [costPrice, setCostPrice] = useState(`0.00`);
  const [inputs, setInputs] = useState({});
  const [inputName, setInputName] = useState("default");
  const [margin, setMargin] = useState(`0.00`);
  const [markup, setMarkup] = useState(`0.00`);
  const [sellingPrice, setSellingPrice] = useState(`0.00`);
  const [minPrice, setMinPrice] = useState(`0.00`);
  const [SalesPrice, setSalesPrice] = useState(`0.00`);
  const [msrp, setMsrp] = useState(`0.00`);
  const [buyDown, setBuyDown] = useState("0.00");
  const [unitInCase, setUnitInCase] = useState("");
  const [casecost, setCasecost] = useState("");
  const [caseprice, setCasePrice] = useState("");
  const [isaddNewItemDepartment, setaddNewItemDepartment] = useState(false);



  const taxDropDownList = useSelector((state) => state?.taxReducer);
  const brandDropDownList = useSelector((state) => state?.brand);
  const departmentDropDownList = useSelector((state) => state?.departmentReducer);
  const sizeDropDownList = useSelector((state) => state?.sizeReducer);
  const packDropDownList = useSelector((state) => state?.packReducer);
  const itemTypeDropDownList = useSelector((state) => state?.itemType);
  const categoryDownList = useSelector((state) => state?.cateogry);
  const subCategoryDownList = useSelector((state) => state?.subCategoryReducer);





  const formik = useFormik({
    enableReinitialize: true,

    initialValues: productField,
    validationSchema: productValidation,
    onSubmit: (values) => {
      productSubmit(values);
    },
  });



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

  const handleCostPriceChange = (event) => {

  }

  function onMinPriceChange(e) {

  }

  function onCasePriceChange(e) {

  }

  const DeleteIteM = (id) => {

  };

  function onBuyDownChange(e) {

  }

  const handleCheckboxChange = (event) => {

  }

  function onCaseCostChange(e) {

  }

  function onUnitInCaseChange(e) {

  }

  const handleInputChange = (e) => {

  }

  const handleAddOrUpdateTable = () => {

  }

  function onMsrpChange(e) {

  }

  function onSalesPriceChange(e) {

  }

  const handleMarkupChange = (event) => {

  }

  const handleSellingPriceChange = (event) => {
  }

  const handleMarginChange = (event) => {

  }

  const handleAddOrUpdateTableMargin = async (e) => {

  }


  const handleDepartmentChange = (e) => {
    console.log(e);

  };



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


  const productSubmit = (values) => {
    formik.resetForm();
    props.handlecloseModel();
  };

  const handleAddNew = () => {

  }

  const handleClose = () => {

    setaddNewItemDepartment(false);
  }
  const setDepartment = (department) => {


    formik.setFieldValue("department", department)
  }


  return (
    <div
      className="container p-1 m-0"
      style={{ minWidth: "100%", maxWidth: "100%" }}
    >

      <div className="card">

        <div
          className="container p-1 m-0"
          style={{ minWidth: "100%", maxWidth: "100%" }}
        >
          <div className="card">
            <FormikProvider
              value={formik}
            >

              <Form
                className="tablelist-form needs-validation"
                autoComplete="off"
                onSubmit={productSubmit}
              >
                <div className="card-header p-2 custom-Blue align-middle d-flex justify-content-between">
                  <h5 className="text-light align-middle mt-2">
                    Product Information
                  </h5>
                  <div>
                    <button
                      type="submit"
                      className="btn me-2 custom-Green add-btn"
                      id="add-btn"
                    >
                      Save
                    </button>
                    <button
                      className="btn custom-Red btn-exit"
                      onClick={() => {
                        props.setEditID(null)
                        formik.resetForm();

                        props.handlecloseModel();

                      }

                      }
                    >
                      Exit
                    </button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className=" p-3 pb-0">
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <label htmlFor="UPC " className="text-dark">
                            UPC
                          </label>
                          <Input
                            name="UPC"
                            // placeholder="UPC"
                            type="number"
                            className="form-control"
                            // style={{ background: "#f5f5dc" }}
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
                            // placeholder="Name"
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

                          {/* <AddDepartmentInfo {...props} tag={true} /> */}
                          {/* <EditDepartMent {...props} tag={true} /> */}
                          <Select
                            value={formik.values.department}
                            onBlur={formik.handleBlur}
                            onChange={(e) => {
                              console.log("e: ", e);
                              handleDepartmentChange(e);
                              // formik.handleChange("department1");
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

                          {/* <a
                          //href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#addCategoryModal1"
                          className="custom-float-right"
                        >
                          Add
                        </a> */}
                          {/* <ManageCategory /> */}

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

                          {/* <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#addCategoryModal1"
                          className="custom-float-right"
                        >
                          Add
                        </a> */}

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
                  </div>
                  {/* //teb open Code */}
                  <div
                    className="container p-0 m-0"
                    style={{ minWidth: "100%", background: "#fff" }}
                  >
                    <div className="p-1 ps-3">
                      <ul
                        className="nav nav-tabs-custom card-header-tabs border-bottom-0"
                        role="tablist"
                      >
                        {itemMap &&
                          itemMap?.length > 0 &&
                          itemMap?.map((item, i) => {
                            console.log("item: ", item);
                            return (
                              <li className="nav-item mb-0">
                                <a
                                  className={
                                    i === itemIndex
                                      ? "nav-link active"
                                      : "nav-link"
                                  }
                                  data-bs-toggle="tab"
                                  href="#addproduct-general-info"
                                  role="tab"
                                  onClick={() => handleChangeTab(i)}
                                >
                                  {
                                    item?.itemSpecification?.listSpecification[0]
                                      ?.typeValue
                                  }
                                  {item?.itemSpecification?.listSpecification
                                    ?.length > 1 &&
                                    " - " +
                                    item?.itemSpecification
                                      ?.listSpecification[1]?.typeValue}
                                </a>
                              </li>
                            );
                          })}

                      </ul>
                    </div>

                    <div className="p-3">
                      <div className="tab-content">
                        <div
                          className="tab-pane active"
                          id="addproduct-general-info"
                          role="tabpanel"
                        >
                          <Row>
                            <Col md="3">
                              <h6>Cost & Price</h6>
                              <Row>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="unitcost"
                                      className="form-label"
                                    >
                                      Unit Cost
                                    </label>
                                    <div className="input-group">
                                      <Cleave
                                        // placeholder="Enter numeral"
                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}

                                        value={costPrice}
                                        onFocus={() => setInputName("unitCost")}
                                        onChange={handleCostPriceChange}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="unitcost"
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="Margin"
                                      className="form-label"
                                    >
                                      Margin
                                    </label>
                                    <div className="input-group">
                                      <Cleave
                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                        value={margin}
                                        name="margin"
                                        onFocus={() => setInputName("margin")}
                                        onChange={(e) => {
                                          handleMarginChange(e);
                                          handleAddOrUpdateTableMargin(e);
                                        }}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="Margin"
                                      />
                                      <span className="input-group-text">%</span>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="UnitPrice"
                                      className="form-label"
                                    >
                                      Unit Price
                                    </label>
                                    <div className="input-group">
                                      <Cleave
                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}

                                        value={sellingPrice}

                                        onFocus={() => setInputName("unitPrice")}
                                        onChange={(e) => {
                                          handleSellingPriceChange(e);
                                          handleAddOrUpdateTableMargin(e);
                                        }}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        name="unitPrice"
                                        id="unitPrice"
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="Markup"
                                      className="form-label"
                                    >
                                      Markup
                                    </label>
                                    <div className="input-group">
                                      <Cleave

                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                        value={markup}

                                        onFocus={() => setInputName("markup")}
                                        onChange={(e) => {
                                          handleMarkupChange(e);
                                          handleAddOrUpdateTableMargin(e);
                                        }}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="Markup"
                                      />
                                      <span className="input-group-text">%</span>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="MinPrice"
                                      className="form-label"
                                    >
                                      Min Price
                                    </label>
                                    <div className="input-group">
                                      <Cleave

                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                        value={minPrice}
                                        onChange={(e) => {
                                          onMinPriceChange(e);
                                          handleInputChange(e);
                                        }}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="MinPrice"
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="SalesPrice"
                                      className="form-label"
                                    >
                                      Sales Price
                                    </label>
                                    <div className="input-group">
                                      <Cleave

                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                        value={SalesPrice}
                                        onChange={(e) => onSalesPriceChange(e)}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="SalesPrice"
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="mb-0">
                                    <label htmlFor="MSRP" className="form-label">
                                      MSRP
                                    </label>
                                    <div className="input-group">
                                      <Cleave

                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                        value={msrp}
                                        onChange={(e) => onMsrpChange(e)}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="MSRP"
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="buyDown"
                                      className="form-label"
                                    >
                                      Buy Down
                                    </label>
                                    <div className="input-group">
                                      <Cleave

                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                        value={buyDown}
                                        onChange={(e) => onBuyDownChange(e)}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="buyDown"
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Col>

                            <Col md="2">
                              <h6 className="mt-4">Buy Case</h6>
                              <Row>

                                <Col >

                                  <FormGroup check
                                    inline>
                                    <input
                                      className="form-check-input"

                                      type="checkbox"
                                      id="BuyAsCase"
                                      name="BuyAsCase"
                                      onChange={handleCheckboxChange}
                                      value={formik.values.BuyAsCase}
                                      checked={formik.values.BuyAsCase}
                                    />
                                    <Label
                                      className="form-check-label 
                                      text-dark ms-3 mt-1 "

                                      htmlFor="BuyAsCase"
                                    >
                                      Buy as Case
                                    </Label>
                                  </FormGroup>

                                </Col>

                              </Row>

                              <Row>
                                <Col  >

                                <Row>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="UnitInCase"
                                      className="form-label"
                                    >
                                      Unit In Case
                                    </label>
                                    <div className="input-group">
                                      <Cleave

                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                        value={unitInCase}
                                        onChange={(e) => onUnitInCaseChange(e)}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="UnitInCase"
                                        disabled={!formik.values.BuyAsCase}
                                      />
                                    </div>
                                  </div>

                                  </Row>
                                </Col>
                              </Row>

                              <Row>

                                <Col >
                                  <div className="mb-0">
                                    <label
                                      htmlFor="CasePrice"
                                      className="form-label"
                                    >
                                      Case Price
                                    </label>
                                    <div className="input-group">
                                      <Cleave

                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                        value={caseprice}
                                        onChange={(e) => {
                                          onCasePriceChange(e);
                                          handleAddOrUpdateTable(e);
                                        }}
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="CasePrice"
                                        disabled={!formik.values.BuyAsCase}
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>

                              </Row>
                              <Row>
                              <Col >
                                <div className="mb-0">
                                  <label
                                    htmlFor="CaseCost"
                                    className="form-label"
                                  >
                                    Case Cost
                                  </label>
                                  <div className="input-group">
                                    <Cleave

                                      options={{
                                        numeral: true,
                                        numeralThousandsGroupStyle: "ten",
                                      }}
                                      value={casecost}
                                      onChange={(e) => onCaseCostChange(e)}
                                      className="form-control text-end"
                                      keyboardType="decimal-pad"
                                      id="CaseCost"
                                      name="Ca"
                                      disabled={!formik.values.BuyAsCase}
                                    />
                                    <span className="input-group-text">$</span>
                                  </div>
                                </div>
                              </Col>
                              </Row>
                            </Col>

                            <Col md="4">

                              <Row>
                                <h6 className="mt-2">UPC</h6>
                                <Col md="8">
                                  <div
                                    className="container p-1"
                                    style={{
                                      maxHeight: "90px",
                                      minHeight: "90px",
                                      width: "220px",
                                      overflowY: "Scroll",
                                    }}
                                  >
                                    {barcodeData?.map((elem, ind) => {
                                      return (
                                        <div
                                          className="btn btn-sm bg-primary-subtle mx-2 my-1"
                                          style={{ cursor: "default" }}
                                          key={ind}
                                        >
                                          <div className="d-flex justify-content-between">
                                            {elem}{" "}
                                            <img
                                              style={{ cursor: "pointer" }}
                                              onClick={() => {
                                                DeleteIteM(ind);
                                              }}
                                              height={"20px"}
                                              className="opacity-75 ms-2"
                                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/0lEQVR4nO2aTUtUURzGf80iW5SGJi7VKKxVFlbUppfxO4TRB7D5EKUbMXFjaIzrxl4ggmCgTX2JypJoYYXZC23Utt448B8YBme853/PuXOucx94YBjueXme837OH3LkyJEjRyoYAIpACXgALAMrQvN7Frgr35hvM48CMA4sAR+ByJKrwCJwU/LKDE4A08B3hehm/AZMAX0EjOPAPLDjUHgjt4E5oIfAcAfY9Ci8kT+A2wSAbuBpisIb+VJ6XltwFvjSRvE1fgZG0hZ/EfgdgPga/wJX0xJ/WSajKDBuS8N4xWngVwBim/EPcMaX+J5AxnycOcFMzs6xEoC4uHzuY52PMsYJV+K7ZeMRZYybrnaM88oKuNwSa/MyJ8zEB5sdxSnunKQfAt4kEG7SDkpeo4pT5RbQm8SAaUWla+Jr6AKqinyqkrYe5xX53NeKLyiOtMbxvWBrwl7ia7Dtkeva+4RxZbcdSmhCK/EnlXW6rjFgKcG47VKa0Eq8+f+tsk4PNQZ8UhZm+Bo40iTfw8ArR2ni8r2t+AFgN0GBcVqzqvxWQ6Ol38aAYsICbVrVZ8ur54GSo0LjtK7Plq/npI0Bcw4L3s+ENMRb7wrLjgvfbzj46vb1fGRjQMVDBeKY4Eu84ePcAAuUO30IzHX6JFjq9GWw2OkboYFO3wqjfNO3aXkXaeLyHQosHqDj8ILGgKKysEGl+DgmDCvrdE1jQEEiMw7CldghlJhSuD2aUHwrEy4o8rlHAvQpXoJX60wYTjBuI0k7VHcjnPq1eJJdocuHkX/KdDM4ehrbcCgmc09jSEBSlDHewjEqAYiKy2d4QLcEH0SBcw04iiecAn4GILJViIz3iLFLgQZJmSVvjJQwFmCY3BVSxkggc8KaRK+1BceAJ20U/yKUwOmJlOOINnys8y6WyVmZjHwJ35Ltrel5waJXwlK+OhS+Lqe6xAebNFGQi0gTnPDB8o5xV970F+QyQ32eDwn9wA25np6Rx5eKsCz/Tco31heYOXLkyJEDe/wH6kWD3MipLy0AAAAASUVORK5CYII="
                                            />
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </Col>

                                <Col md="3">

                                  <Row className="mb-2">

                                    <button
                                      className=
                                      "btn col custom-Green"
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#newUPCmodal"
                                    >
                                      Add New
                                    </button>

                                  </Row>

                                  <Row>

                                    <button
                                      type="button"
                                      className="btn col edit-btn"
                                      disabled={barcodeData?.length >= 1}
                                      onClick={() => {
                                        setBarcodeData((oldData) => [
                                          ...oldData,
                                          parseInt(
                                            Math.random() * 10000000000001
                                          ).toFixed(0),
                                        ]);
                                        console.log(`"[${barcodeData}]"`);
                                      }}
                                    >
                                      Auto
                                    </button>

                                  </Row>
                                </Col>
                              </Row>

                              <Row>
                                <Col md="11">
                                  <div className="mt-4">
                                    <div
                                      style={{
                                        margin: "-1rem 0",
                                        height: "155px",
                                        overflowY: "auto",
                                      }}
                                    >
                                      <table className="table table-sm table-bordered table-hover table-striped table-responsive text-center">
                                        <thead
                                          className="table-success table-fixed-header"
                                          style={{ top: "-1px" }}
                                        >
                                          <tr>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {unitPTable?.map((elem, ind) => {
                                            return (
                                              <tr key={ind}>
                                                <td className="text-center">
                                                  <h5 className=" fs-16 my-1 fw-normal text-dark">
                                                    {unitPTable[ind].quantity}
                                                  </h5>
                                                </td>

                                                <td className="text-center">
                                                  <h5 className="fs-16 my-1 fw-normal text-dark">
                                                    {unitPTable[ind].unitPrice}
                                                  </h5>
                                                </td>
                                              </tr>
                                            );
                                          })}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </Col>

                              </Row>
                            </Col>

                            <Col md="2">

                            </Col>
                            
                          </Row>




                          <Row className="mt-2">
                            <Col>
                              <FormGroup  >
                                <input
                                  className="form-check-input"

                                  type="checkbox"
                                  id="NonDiscount"
                                  name="NonDiscount"
                                  onChange={formik.handleChange}
                                  value={formik.values.NonDiscount}
                                />
                                <label
                                  className="form-check-label text-dark ms-3 mt-1"

                                  htmlFor="NonDiscount"
                                >
                                  Non Discountable
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  id="DepositeItem"
                                  name="DepositeItem"
                                  onChange={formik.handleChange}
                                  value={formik.values.DepositeItem}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"
                                  htmlFor="DepositeItem"
                                >
                                  Deposite Item
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="AcceptFoodStamp"
                                  name="AcceptFoodStamp"
                                  onChange={formik.handleChange}
                                  value={formik.values.AcceptFoodStamp}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="AcceptFoodStamp"
                                >
                                  Accept Food Stamp
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="NonRevenue"
                                  name="NonRevenue"
                                  onChange={formik.handleChange}
                                  value={formik.values.NonRevenue}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="NonRevenue"
                                >
                                  Non Revenue
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="NonCountable"
                                  name="NonCountable"
                                  onChange={formik.handleChange}
                                  value={formik.values.NonCountable}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="NonCountable"
                                >
                                  Non Countable
                                </label>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="AcceptWicCheck"
                                  name="AcceptWicCheck"
                                  onChange={formik.handleChange}
                                  value={formik.values.AcceptWicCheck}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"
                                  htmlFor="AcceptWicCheck"
                                >
                                  Accept Wic Check
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  id="CountWithNoDisc"
                                  name="CountWithNoDisc"
                                  onChange={formik.handleChange}
                                  value={formik.values.ShowInOpenPrice}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="CountWithNoDisc"
                                >
                                  Count With No Disc
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="WeightedItem"
                                  name="WeightedItem"
                                  onChange={formik.handleChange}
                                  value={formik.values.WeightedItem}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="WeightedItem"
                                >
                                  Weighted Item
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="WebItem"
                                  name="WebItem"
                                  onChange={formik.handleChange}
                                  value={formik.values.WebItem}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"
                                  htmlFor="WebItem"
                                >
                                  Web Item
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="ReturnItem"
                                  name="ReturnItem"
                                  onChange={formik.handleChange}
                                  value={formik.values.ReturnItem}
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="ReturnItem"
                                >
                                  Return Item
                                </label>
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                        <div
                          className="tab-pane"
                          id="addproduct-metadata"
                          role="tabpanel"
                        >
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label htmlFor="SKU " className="text-dark">
                                  SKU
                                </Label>
                                <Input
                                  name="SKU"

                                  type="text"
                                  className="form-control"

                                  id="SKU"
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label htmlFor="Item" className="text-dark">
                                  Item
                                </Label>
                                <Input
                                  name="Item"

                                  type="text"
                                  className="form-control"

                                  id="Item"
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label htmlFor="Quantity" className="text-dark">
                                  Quantity
                                </Label>
                                <Input
                                  name="Quantity"

                                  type="text"
                                  className="form-control"

                                  id="Quantity"
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input"
                                  style={{ marginTop: "32px" }}
                                  type="checkbox"
                                  id="MultiplybyPack"
                                  name="MultiplybyPack"
                                />
                                <label
                                  className="form-check-label text-dark ms-3 "
                                  style={{ marginTop: "32px" }}
                                  htmlFor="MultiplybyPack"
                                >
                                  Multiply by Pack
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <div className="d-grid gap-2 d-md-block mt-4">
                                <button className="btn btn-primary" type="button">
                                  Add
                                </button>
                                <button
                                  className="btn btn-primary ms-2"
                                  type="button"
                                >
                                  Remove
                                </button>
                              </div>
                            </Col>
                          </Row>

                          <Row className="mt-2">
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input"

                                  type="checkbox"
                                  id="NonDiscount"
                                  name="NonDiscount"
                                />
                                <label
                                  className="form-check-label text-dark ms-3 mt-1"

                                  htmlFor="NonDiscount"
                                >
                                  Non Discountable
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="DepositeItem"
                                  name="DepositeItem"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="DepositeItem"
                                >
                                  Deposite Item
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="AcceptFoodStamp"
                                  name="AcceptFoodStamp"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="AcceptFoodStamp"
                                >
                                  Accept Food Stamp
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="NonRevenue"
                                  name="NonRevenue"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="NonRevenue"
                                >
                                  Non Revenue
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="NonCountable"
                                  name="NonCountable"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="NonCountable"
                                >
                                  Non Countable
                                </label>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="AcceptWicCheck"
                                  name="AcceptWicCheck"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="AcceptWicCheck"
                                >
                                  Accept Wic Check
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="id7"
                                  name="id7"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="id7"
                                >
                                  Count With No Disc
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="WeightedItem"
                                  name="WeightedItem"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="WeightedItem"
                                >
                                  Weighted Item
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="WebItem"
                                  name="WebItem"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="WebItem"
                                >
                                  Web Item
                                </label>
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <input
                                  className="form-check-input "

                                  type="checkbox"
                                  id="ReturnItem"
                                  name="ReturnItem"
                                />
                                <label
                                  className="form-check-label text-dark ms-3  mt-1"

                                  htmlFor="ReturnItem"
                                >
                                  Return Item
                                </label>
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </Form>
            </FormikProvider>
          </div>


        </div>


        <DepartmentModal
          isopen={isaddNewItemDepartment}
          handleClose={handleClose}
          handelSelect={setDepartment}
        ></DepartmentModal>



      </div>
    </div>
  );
};

export default AddProductForm;

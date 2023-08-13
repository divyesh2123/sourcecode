import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MantineProvider, useMantineTheme, Box } from "@mantine/core";
import { MantineReactTable } from "mantine-react-table";
import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
//import upctabelRequest from "../API/ListUpc/action";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";
import { productListRequest } from "../../redux/product/action";
import ProductList from "../../components/product/ProductList";
import AddProductForm from "../../components/product/AddProduct";


// import upctabelRequest from "../API/ListUpc/action";
const ManageProduct = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disableButton,setdisableButton] = useState(false);
  const [editID, setEditID] = useState(null);
  const productList = useSelector((state) => state.productReducer);
  const [openModel,setOpenModel] = useState(false);

  useEffect(() => {
      if (productList.productData === null && productList.error === null && 
         productList.isProductListLoadding === false) {
        dispatch(productListRequest());
      } 
       
    }, [productList]);
  
  
    const handlecloseModel =()=> {

      setOpenModel(false);
  }

  const handleopeModel =()=> {

      setOpenModel(true);
  }
  
  
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "sku",
        header: "SKU",
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Product Name",
        size: 50,
      },
      {
        accessorKey: "size",
        header: "Size",
        size: 50,
      },
      {
        accessorKey: "pack",
        header: "Pack",
        size: 50,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 50,
      },
      {
        accessorKey: "department",
        header: "Department",
        size: 50,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 50,
      },

      {
        accessorKey: "status",
        header: "Status",
        size: 50,
      },
    ],
    [] //end
  );
  
 

  return (
    <React.Fragment>
      <div className="container width-100VW py-2">
        <div className="card">
          <div className="card-header custom-Blue border-0">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0 flex-grow-1">
                {" "}
                Product Information{" "}
              </h5>

              <div className="flex-shrink-0"></div>
              <div className="d-flex gap-2 flex-wrap">
                <button
                  className="btn custom-Red btn-exit"
                  onClick={() => {
                    navigate("/superAdminDashboard");
                  }}
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="flex-shrink-0">
              <div className="d-flex gap-2 flex-wrap">
               
                  <button
                    className="col btn custom-Green text-nowrap"
                    //  data-bs-toggle = "modal"
                    style={{ width: "130px" }}
                    onClick={() => {
                        setEditID(null);
                        setOpenModel(true);
                    }}
                  >
                    Add New
                  </button>
                

                <button
                  className="col btn custom-Blue text-nowrap w-50"
                  data-bs-toggle="modal"
                  disabled
                  style={{ width: "130px" }}
                >
                  Clone
                </button>
                <button
                  className="col btn btn-warning text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#addchangepriceTypeModal"
                  disabled={disableButton}
                  style={{ width: "130px" }}
                >
                  Change Price
                </button>
                <button
                  className="col btn btn-primary text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#ChangeQuantityModal2"
                  disabled={disableButton}
                  style={{ width: "130px" }}
                >
                  Change Quantity
                </button>
                <button
                  className="col btn btn-dark text-nowrap"
                 
                  style={{ width: "130px" }}
                  //showsAlert={props.showsAlert}
                >
                  Create Button
                </button>
                <button
                  className="col btn btn custom-Green text-nowrap"
                  data-bs-toggle="modal"
                  disabled
                  style={{ width: "130px" }}
                >
                  Add to Sale
                </button>
                <button
                  className="col btn custom-Blue  text-nowrap"
                  data-bs-toggle="modal"
                  disabled
                  style={{ width: "130px" }}
                >
                  Make Group
                </button>

                <button
                  className="col btn btn-warning  text-nowrap"
                  data-bs-toggle="modal"
                  disabled
                  style={{ width: "130px" }}
                >
                  Print Label
                </button>

                <button
                  className="col btn btn-primary text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#addAssignVendorTypeModal"
                  disabled={disableButton}
                  style={{ width: "130px" }}
                >
                  Assign Vendor
                </button>

                <button
                  className="btn btn-dark"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  style={{ width: "130px" }}
                >
                  Filter
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#addquickpriceTypeModal"
                  style={{ width: "130px" }}
                >
                  Quick Add
                </button>
                <button
                  className="btn btn-warning"
                  type="button"
                  disabled={disableButton}
                  style={{ width: "130px" }}
                  onClick={() => {
                    // setEditID(row.original.id);
                  }}
                >
                  <Link
                    to="/AddProductInformation"
                    className="text-dark"
                    style={{ textDecoration: "none", width: "130px" }}
                  >
                    Edit
                  </Link>
                </button>
                {/* <AddProductInformation editID={editID} /> */}
              </div>
            </div>
          </div>

          {/* Mantine Table Defined Here  */}
          <div className="row mb-0 mt-2 ">

            <ProductList
              ProductListReducer={productList?.productData?.listResult}
              setEditID={setEditID} 
              listLoad ={productList.isProductListLoadding}
            
            ></ProductList>
          
          </div>

        
        </div>
      </div>

      <div className="card-body">
                        <div className="row mb-0">
                            <AddProductForm
                                editID={editID}
                                setEditID={setEditID}
                                show={openModel}
                                handlecloseModel={handlecloseModel}
                            ></AddProductForm>
                        </div>
                    </div>
      
    </React.Fragment>
  );
};

export default ManageProduct;

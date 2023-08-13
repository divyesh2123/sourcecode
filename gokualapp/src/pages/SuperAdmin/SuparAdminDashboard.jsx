
import React, { useEffect } from "react";
import modules from '../../helper/data/superAdminData'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutRequest, clearLogOutData } from "../../Utils/Common/API/action";
import { clearUserData } from "../../redux/login/actions";


const SuparAdminDashboard = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const logOutData = useSelector((state) => state.logOutReducer);

  const LogOutUser = () => {
    dispatch(LogoutRequest());
  };

  useEffect(() => {
    if (logOutData.Data?.status === 200) {
      props.showAlert("Logout Successfull.", "success");
      navigate("/login");
      sessionStorage.clear();
      localStorage.clear();
      dispatch(clearUserData());
      dispatch(clearLogOutData());
    } else if (logOutData.error !== null) {
      props.showAlert("Occured some error while Logging out.", "warning");
      dispatch(clearLogOutData());
    } else {
      return;
      dispatch(clearLogOutData());
    }
   
  }, [logOutData]);

  return (
    <React.Fragment>
      <div
        className="container position-absolute p-auto"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      >
        <div className="h-100">
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3">
              {/* card */}
              <div
                className="card card-animate"
                style={{ marginBottom: "1.5rem" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p
                        className="text-uppercase text-muted text-truncate mb-0"
                        style={{
                          fontWeight: "500",
                          color: "#878a99",
                          fontSize: "14px",
                          overflow: "hidden",
                          opacity: "1",
                        }}
                      >
                        Total Earnings
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <h5
                        className="text-success  mb-0"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "13px",
                          opacity: "1",
                          color: "10, 179, 156",
                        }}
                      >
                        <i className="ri-arrow-right-up-line  align-middle" />{" "}
                        +16.24 %
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-2">
                    <div>
                      <h4
                        className=" fw-semibold ff-secondary mb-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "22px",
                          color: "#495057",
                        }}
                      >
                        $
                        <span className="counter-value" data-target="559.25">
                          0
                        </span>
                        k{" "}
                      </h4>
                      <Link to="2" className="text-decoration-underline">
                        View net earnings
                      </Link>
                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-soft-success rounded fs-3">
                        <i className="bx bx-dollar-circle text-success" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-xl-3 col-md-3">
              {/* card */}
              <div
                className="card card-animate"
                style={{ marginBottom: "1.5rem" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p
                        className="text-uppercase  text-truncate mb-0"
                        style={{
                          fontWeight: "500",
                          color: "#878a99",
                          fontSize: "14px",
                          overflow: "hidden",
                          opacity: "1",
                        }}
                      >
                        Orders
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <h5
                        className="text-danger fs-14 mb-0"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "13px",
                          opacity: "1",
                          color: "240, 101, 72",
                        }}
                      >
                        <i className="ri-arrow-right-down-line fs-13 align-middle" />{" "}
                        -3.57 %
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-2">
                    <div>
                      <h4
                        className="fs-22 fw-semibold ff-secondary mb-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "22px",
                          color: "#495057",
                        }}
                      >
                        <span className="counter-value" data-target={36894}>
                          0
                        </span>
                      </h4>
                      <Link to="2" className="text-decoration-underline">
                        View all orders
                      </Link>
                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-soft-info rounded fs-3">
                        <i className="bx bx-shopping-bag text-info" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-xl-3 col-md-3">
              {/* card */}
              <div
                className="card card-animate"
                style={{ marginBottom: "1.5rem" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p
                        className="text-uppercase fw-medium text-muted text-truncate mb-0"
                        style={{
                          fontWeight: "500",
                          color: "#878a99",
                          fontSize: "14px",
                          overflow: "hidden",
                          opacity: "1",
                        }}
                      >
                        Customers
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <h5
                        className="text-success fs-14 mb-0"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "13px",
                          opacity: "1",
                          color: "10, 179, 156",
                        }}
                      >
                        <i className="ri-arrow-right-up-line fs-13 align-middle" />{" "}
                        +29.08 %
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-2">
                    <div>
                      <h4
                        className="fs-22 fw-semibold ff-secondary mb-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "22px",
                          color: "#495057",
                        }}
                      >
                        <span className="counter-value" data-target="183.35">
                          0
                        </span>
                        M{" "}
                      </h4>
                      <Link to="2" className="text-decoration-underline">
                        See details
                      </Link>
                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-soft-warning rounded fs-3">
                        <i className="bx bx-user-circle text-warning" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-xl-3 col-md-3">
              {/* card */}
              <div
                className="card card-animate"
                style={{ marginBottom: "1.5rem" }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p
                        className="text-uppercase fw-medium text-muted text-truncate mb-0"
                        style={{
                          fontWeight: "500",
                          color: "#878a99",
                          fontSize: "14px",
                          overflow: "hidden",
                          opacity: "1",
                        }}
                      >
                        {" "}
                        My Balance
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <h5
                        className="text-muted fs-14 mb-0"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "13px",
                          opacity: "1",
                          color: "10, 179, 156",
                        }}
                      >
                        +0.00 %
                      </h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between mt-2">
                    <div>
                      <h4
                        className="fs-22 fw-semibold ff-secondary mb-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "22px",
                          color: "#495057",
                        }}
                      >
                        $
                        <span className="counter-value" data-target="165.89">
                          0
                        </span>
                        k{" "}
                      </h4>
                      <Link to="2" className="text-decoration-underline">
                        Withdraw money
                      </Link>
                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-soft-primary rounded fs-3">
                        <i className="bx bx-wallet text-primary" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>{" "}
          {/* end row*/}
          <div className="row" style={{ height: "26.5rem" }}>
            <div className="col-xl-8 col-sm-8">
              <div className="card">
                <div className="card-header align-items-center d-flex custom-Blue">
                  <h4
                    className="card-title mb-0 flex-grow-1 text-light"
                    style={{
                      fontSize: "16px",
                      margin: " 0 0 7px 0",
                      fontfamily: "Poppins, sans-serif",
                    }}
                  >
                    Best Selling Products
                  </h4>
                  <div className="flex-shrink-0">
                    <div className="dropdown card-header-dropdown">
                      <a
                        className="text-reset dropdown-btn text-light"
                        href="drop"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          className="fw-semibold text-uppercase text-light"
                          style={{ fontSize: "12px" }}
                        >
                          Sort by:
                        </span>
                        <span
                          className="text-light"
                          style={{ fontSize: "12px" }}
                        >
                          Today
                          <i className="mdi mdi-chevron-down ms-1" />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end text-light">
                        <a className="dropdown-item" href="2">
                          Today
                        </a>
                        <a className="dropdown-item" href="2">
                          Yesterday
                        </a>
                        <a className="dropdown-item" href="2">
                          Last 7 Days
                        </a>
                        <a className="dropdown-item" href="2">
                          Last 30 Days
                        </a>
                        <a className="dropdown-item" href="2">
                          This Month
                        </a>
                        <a className="dropdown-item" href="2">
                          Last Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <div
                    className="table-responsive table-card"
                    style={{ margin: "-1rem 0" }}
                  >
                    <table className="table table-hover table-centered align-middle table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              {/* <div
                                      className=" bg-light rounded p-1 me-2"
                                      style={{ height: "3rem", width: "3rem" }}
                                    >
                                      <img
                                        src="~/Theme/assets/images/products/img-1.png"
                                        alt=""
                                        className="img-fluid d-block"
                                      />
                                    </div> */}
                              <div>
                                <h5
                                  className="my-1"
                                  style={{
                                    color: "#495057",
                                    fontSize: "15px",
                                  }}
                                >
                                  <a
                                    href="apps-ecommerce-product-details.html"
                                    className="text-reset"
                                  >
                                    Branded T-Shirts
                                  </a>
                                </h5>
                                <span style={{ color: "878a99 " }}>
                                  24 Apr 2021
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              $29.00
                            </h5>
                            <span className="text-muted">Price</span>
                          </td>
                          <td className="text-center">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              62
                            </h5>
                            <span className="text-muted">Orders</span>
                          </td>
                          <td className="text-center">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              510
                            </h5>
                            <span className="text-muted">Stock</span>
                          </td>
                          <td className="text-right">
                            <h5 className="fs-14 my-1 fw-normal text-dark ">
                              $1,798
                            </h5>
                            <span className="text-muted ">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          {/* <td> */}
                          {/* <div className="d-flex align-items-center">
                                  
                                    <div>
                                      <h5
                                        className=" my-1"
                                        style={{
                                          color: "#495057",
                                          fontSize: "15px",
                                        }}
                                      >
                                        <a
                                          href="apps-ecommerce-product-details.html"
                                          className="text-reset"
                                        >
                                          Branded T-Shirts
                                        </a>
                                      </h5>
                                      <span style={{ color: "878a99 " }}>
                                        24 Apr 2021
                                      </span>
                                    </div>
                                  </div> */}
                          {/* </td> */}
                          {/* <td className="text-right">
                                  <h5 className="fs-14 my-1 fw-normal text-dark">
                                    $29.00
                                  </h5>
                                  <span className="text-muted">Price</span>
                                </td> */}
                          {/* <td className="text-center">
                                  <h5 className="fs-14 my-1 fw-normal text-dark">
                                    62
                                  </h5>
                                  <span className="text-muted">Orders</span>
                                </td> */}
                          {/* <td className="text-center">
                                  <h5 className="fs-14 my-1 fw-normal text-dark">
                                    510
                                  </h5>
                                  <span className="text-muted">Stock</span>
                                </td> */}
                          {/* <td className="text-right">
                                  <h5 className="fs-14 my-1 fw-normal text-dark">
                                    $1,798
                                  </h5>
                                  <span className="text-muted">Amount</span>
                                </td> */}
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              {/* <div
                                      className=" bg-light rounded p-1 me-2"
                                      style={{ height: "3rem", width: "3rem" }}
                                    >
                                      <img
                                        src="~/Theme/assets/images/products/img-1.png"
                                        alt=""
                                        className="img-fluid d-block"
                                      />
                                    </div> */}
                              <div>
                                <h5
                                  className=" my-1"
                                  style={{
                                    color: "#495057",
                                    fontSize: "15px",
                                  }}
                                >
                                  <a
                                    href="apps-ecommerce-product-details.html"
                                    className="text-reset"
                                  >
                                    Branded T-Shirts
                                  </a>
                                </h5>
                                <span style={{ color: "878a99 " }}>
                                  24 Apr 2021
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              $29.00
                            </h5>
                            <span className="text-muted">Price</span>
                          </td>
                          <td className="text-center">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              62
                            </h5>
                            <span className="text-muted">Orders</span>
                          </td>
                          <td className="text-center">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              510
                            </h5>
                            <span className="text-muted">Stock</span>
                          </td>
                          <td className="text-right">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              $1,798
                            </h5>
                            <span className="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <h5
                                  className=" my-1"
                                  style={{
                                    color: "#495057",
                                    fontSize: "15px",
                                  }}
                                >
                                  <a
                                    href="apps-ecommerce-product-details.html"
                                    className="text-reset"
                                  >
                                    Branded T-Shirts
                                  </a>
                                </h5>
                                <span style={{ color: "878a99 " }}>
                                  24 Apr 2021
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              $29.00
                            </h5>
                            <span className="text-muted">Price</span>
                          </td>
                          <td className="text-center">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              62
                            </h5>
                            <span className="text-muted">Orders</span>
                          </td>
                          <td className="text-center">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              510
                            </h5>
                            <span className="text-muted">Stock</span>
                          </td>
                          <td className="text-right">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              $1,798
                            </h5>
                            <span className="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <h5
                                  className=" my-1"
                                  style={{
                                    color: "#495057",
                                    fontSize: "15px",
                                  }}
                                >
                                  <a
                                    href="apps-ecommerce-product-details.html"
                                    className="text-reset"
                                  >
                                    Branded T-Shirts
                                  </a>
                                </h5>
                                <span style={{ color: "878a99 " }}>
                                  24 Apr 2021
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              $29.00
                            </h5>
                            <span className="text-muted">Price</span>
                          </td>
                          <td className="text-center">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              62
                            </h5>
                            <span className="text-muted">Orders</span>
                          </td>
                          <td className="text-center">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              510
                            </h5>
                            <span className="text-muted">Stock</span>
                          </td>
                          <td className="text-right">
                            <h5 className="fs-14 my-1 fw-normal text-dark">
                              $1,798
                            </h5>
                            <span className="text-muted">Amount</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                    <div className="col-sm">
                      <div className="text-muted">
                        Showing <span className="fw-semibold">5</span> of{" "}
                        <span className="fw-semibold">25</span> Results
                      </div>
                    </div>
                    <div className="col-sm-auto  mt-3 mt-sm-0">
                      <ul className="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                        <li className="page-item disabled">
                          <Link to="2" className="page-link">
                            ←
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="2" className="page-link">
                            1
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link to="2" className="page-link">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="2" className="page-link">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="2" className="page-link">
                            →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-4">
              <div className="card card-height-100">
                <div className="card-header align-items-center d-flex custom-Blue">
                  <h4
                    className="card-title mb-0 flex-grow-1 text-light"
                    style={{
                      fontSize: "16px",
                      margin: " 0 0 7px 0",
                      fontfamily: "Poppins, sans-serif",
                    }}
                  >
                    Store Visits by Source
                  </h4>
                  <div className="flex-shrink-0">
                    <div className="dropdown card-header-dropdown">
                      <a
                        className="text-reset dropdown-btn text-light"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span
                          className="text-light"
                          style={{ fontSize: "12px" }}
                        >
                          Report
                          <i className="mdi mdi-chevron-down ms-1" />
                        </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="2">
                          Download Report
                        </a>
                        <a className="dropdown-item" href="2">
                          Export
                        </a>
                        <a className="dropdown-item" href="2">
                          Import
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card header */}
                <div className="card-body p-0"></div>
              </div>
            </div>
          </div>
          {/* display all module using map() method  */}
          <div className="row row-cols-xxl-6 row-cols-lg-6 row-cols-md-2 row-cols-1 mt-0">
            {modules.map((m, index) => (
              <div className="col" key={index}>
                <Link to={m.linkTo} style={{ textDecoration: "none" }}>
                  <div
                    className={`card shadow-none text-center ${m.bgColor}`}
                    style={{
                      marginBottom: "1.5rem",
                      backgroundColor: m.bgColor,
                    }}
                  >
                    <div className="card-body py-2">
                      <div className="avatar-sm position-relative mb-2 mx-auto">
                        <div className="avatar-title bg-transparent text-light rounded-circle">
                          <img src={m.imageSrc} alt="" />
                        </div>
                      </div>
                      <h5 className="fs-15 pt-1 text-light">{m.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            <div className="col">
              <div
                className="card shadow-none text-center custom-Red"
                onClick={() => {
                  LogOutUser();
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body py-2">
                  <div className="avatar-sm position-relative mb-2 mx-auto">
                    <div className="avatar-title bg-transparent text-light rounded-circle">
                      <img
                        src={require("../../Theme/assets/images/icons/EXIT.png")}
                        alt=""
                      />
                    </div>
                  </div>

                  <h5 className="fs-15 pt-1 text-light">Exit</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuparAdminDashboard;

import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import DepartmentList from "../../components/department/DepartmentList";
import { clearDepartmentUpdateData, cleardepartmentListData, departmentListRequest } from "../../redux/department/actions";
import AddDepartmentForm from "../../components/department/AddDepartmentForm";


const ManageDepartment = (props) => {

   
    const departmentList = useSelector((state) => state.departmentReducer);
    const dispatch = useDispatch();
    const [editID, setEditID] = useState(null);
    const [openModel,setOpenModel] = useState(false);

    useEffect(()=> {

        if (
            departmentList.departmentData === null &&
            departmentList.error === null && departmentList.isDepartmentListLoadding === false
          ) {
            
           
            dispatch(departmentListRequest());
          
          }

    },[departmentList])

    const handlecloseModel =()=> {

        setOpenModel(false);
    }

    const handleopeModel =()=> {

        setOpenModel(true);
    }

    return (
        <div>
            <div className="container width-100VW py-2">
                <div className="card">
                    <div className="card-header custom-Blue border-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title mb-0 flex-grow-1">
                                Department Information
                            </h5>
                            <div className="flex-shrink-0">
                                <div className="d-flex gap-2 flex-wrap">
                                    <button
                                        className="btn add-btn custom-Green"
                                      
                                     
                                       
                                        onClick={() => {
                                            setEditID(null);
                                            setOpenModel(true);
                                        }}
                                    >
                                        Add New
                                    </button>
                                    <AddDepartmentForm
                                        editID={editID}
                                        setEditID={setEditID}
                                        showsAlert={props.showsAlert}
                                        show={openModel}
                                        handlecloseModel={handlecloseModel}
                                    />

                                    <Link
                                        to="/SuperAdminDashboard"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <button className="btn custom-Red btn-exit">Exit</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <EditDepartMentForm
                        editID={editID}
                        setEditID={setEditID}
                        showsAlert={props.showsAlert}
                    /> */}
                    <div className="card-body">
                        <div className="row mb-0">
                            <DepartmentList
                                departmentListReducer={departmentList?.departmentData?.listResult}
                                setEditID={setEditID} 
                                listLoadData={departmentList.isDepartmentListLoadding}
                                handleopeModel={handleopeModel}
                            ></DepartmentList>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );


}

export default ManageDepartment;
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import DepartmentList from "../../components/department/DepartmentList";
import { clearDepartmentUpdateData, cleardepartmentListData, departmentListRequest } from "../../redux/department/actions";
import AddDepartmentForm from "../../components/department/AddDepartmentForm";
import { Modal, ModalBody, ModalHeader } from "reactstrap";


const DepartmentModal = (props) => {


    const departmentList = useSelector((state) => state.departmentReducer);
    const dispatch = useDispatch();
    const [editID, setEditID] = useState(null);
    const [openModel, setOpenModel] = useState(false);



    useEffect(() => {

        if (
            departmentList.departmentData === null &&
            departmentList.error === null && departmentList.isDepartmentListLoadding === false
        ) {


            dispatch(departmentListRequest());

        }



    }, [departmentList])

    const handlecloseModel = () => {

        setOpenModel(false);
    }

    const handleopeModel = () => {

        setOpenModel(true);
    }

    return (
        <>
            <Modal isOpen={props.isopen} size="xl">

                <div className="card">
                    <div
                        className="card-header custom-Blue border-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-center text-light">
                                Department Information
                            </h5>

                            <div className="flex-shrink-0">
                                <div className="d-flex gap-2 flex-wrap">
                                    <button
                                        className="btn add-btn custom-Green"

                                        id="create-btn"

                                        onClick={() => {
                                            setEditID(null);
                                            setOpenModel(true);
                                            props.handleClose();
                                        }}
                                    >
                                        Add New
                                    </button>




                                    <Link
                                        // to="/SuperAdminDashboard"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <button
                                            className="btn custom-Red btn-exit"

                                            type="reset"


                                            onClick={() => {
                                                props.handleClose();
                                            }}
                                        >
                                            Close
                                        </button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ModalBody>


                        <DepartmentList
                            departmentListReducer={departmentList?.departmentData?.listResult}
                            setEditID={setEditID}
                            listLoadData={departmentList.isDepartmentListLoadding}
                            handleopeModel={handleopeModel}
                            handelSelect= { props.handelSelect }
                            handlecloseModel={()=> {
                                props.handleClose();
                            }}                    
                        
                        ></DepartmentList>
                    </ModalBody>

                </div>


            </Modal>

            <AddDepartmentForm
                editID={editID}
                setEditID={setEditID}

                show={openModel}
                handlecloseModel={handlecloseModel}
              
            />
        </>

    );


}

export default DepartmentModal;
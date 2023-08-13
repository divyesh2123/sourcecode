import { Routes, Route } from "react-router-dom";
import Alert from "./Utils/Alerts/Alert";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageNotFound from "./Utils/PageNotFound/PageNotFound";
import SweetAlert from "./Utils/Alerts/SweetAlert";
import Login from "./pages/Authentication/Login";
import SweetAlertConfirm from "./Utils/Alerts/SweetAlertConfirm";
import SuparAdminDashboard from "./pages/SuperAdmin/SuparAdminDashboard";
import ManageDepartment from "./pages/ManageDepartment/ManageDepartment";
import ManageProduct from "./pages/ManageProduct/ManageProduct";
function App() {

  const [alert, setAlert] = useState(null);
  const [sAlert, setsAlert] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [sConfirm, setsConfirm] = useState("Hello", "Hello there", "success");
  const [modal_backdrop, setmodal_backdrop] = useState(false);
  const [modal_backdrop1, setmodal_backdrop1] = useState(false);

  const showAlert = (mssge, type) => {
    setAlert({
      msg: mssge,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const showsAlert = (title, mssge, type) => {
    setsAlert({
      tit: title,
      msg: mssge,
      type: type,
    });
    setmodal_backdrop(true);
  };

  const showConfirm = (title, mssge, type, method) => {
    setsConfirm({
      tit: title,
      msg: mssge,
      type: type,
      method: method,
    });
    setmodal_backdrop1(true);
  };

  const [isUser, setIsUser] = useState([]);
  const [isLogged, setIsLogged] = useState(true);
  const user = useSelector((state) => state.userReducer);
  const user2 = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (user2 === null) {
      setIsLogged(false);
    } else if (user2.roleId === 1) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [user, user2]);
  return (
    <React.Fragment>
    <Alert alert={alert} />
    <SweetAlert
      setmodal_backdrop={setmodal_backdrop}
      modal_backdrop={modal_backdrop}
      sAlert={sAlert}
    />
    <SweetAlertConfirm
      setmodal_backdrop={setmodal_backdrop1}
      modal_backdrop={modal_backdrop1}
      sConfirm={sConfirm}
    />
    <Routes>
      {isLogged ? (
        <React.Fragment>
          <Route path="*" element={<PageNotFound />} />
          
          <Route
            path="/login"
            element={<Login showAlert={showAlert} showsAlert={showsAlert} />}
          />
          <Route
            path="/"
            element={<Login showAlert={showAlert} showsAlert={showsAlert} />}
          />

          <Route
            path="/SuperAdminDashboard"
            element={<SuparAdminDashboard showAlert={showAlert} showsAlert={showsAlert} />}
          />
         
         <Route
              path="/ManageDepartment"
              element={
                <ManageDepartment 
                  showAlert={showAlert}
                  showsAlert={showsAlert}
                  showConfirm={showConfirm}
                />
              }
            />

<Route
              path="/ManageProduct"
              element={
                <ManageProduct 
                  showAlert={showAlert}
                  showsAlert={showsAlert}
                  showConfirm={showConfirm}
                />
              }
            />
          

          
         
            
          
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Route path="*" element={<Login showAlert={showAlert} />} />
        </React.Fragment>
      )}
    </Routes>
   
  </React.Fragment>
    
  );
}

export default App;

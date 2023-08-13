import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { loginRequest } from "../../redux/login/actions";


const LoginForm = (props) => {
  let loginApproval = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

 
  //   dispatch(clearUserData());
  // }, []);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log(loginApproval);
    if (loginApproval.userData) {
      setIsLoading(false);
      try {
        const user = JSON.parse(`${sessionStorage.getItem("user")}`);
        const AT = user.accessToken;
        const roleName = user.roleName;
        const author = sessionStorage.getItem("auth");
        // console.log(`${AT}`);
        if (author && AT != null) {
          if (roleName === "Employee" || roleName === "cashier") {
            if (user.singleResult.isFirstTime) {
              navigate(`/openingBalance`);
              props.showAlert(
                `Welcome ${user.name} to Gokul POS. You are currently logged in as ${roleName} role.`,
                "success"
              );
            } else {
              navigate(`/order`);
              props.showAlert(
                `Welcome ${user.name} to Gokul POS. You are currently logged in as ${roleName} role.`,
                "success"
              );
            }
          } else {
            // navigate(`/${roleName}dashboard`);
            navigate(`/SuperAdminDashboard`);
            props.showAlert(
              `Welcome ${user.name} to Gokul POS. You are currently logged in as ${roleName} role.`,
              "success"
            );
          }
          // console.log("valid to be redirected");
        } else {
          // console.log("Invalid to be redirected");
          props.showAlert(
            "Invalid Credentials | Please check and enter creds again",
            "danger"
          );
        }
      } catch (error) {
        return;
        // props.showAlert(
        //   "Invalid Credentials | Please check and enter creds again",
        //   "danger"
        // );
        //return;
      }
    } else if (loginApproval.userData) {
      props.showAlert("Login failed Try Again", "danger");
      return;
    } else {
      return;
    }
  }, [loginApproval]);

  const [inputs, setInputs] = useState({});
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState();
  const [keyboardOverlay, setKeyboardOverlay] = useState(false);
  const keyboard = useRef();
  const navigate = useNavigate();

  const onChangeAll = (inputs) => {
    setInputs({ ...inputs });
    // console.log("Inputs changed", inputs);
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = (button) => {
    // console.log("Button pressed", button);
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const inputVal = event.target.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal,
    });

    // keyboard.current.setInput(inputVal);
  };

  const getInputValue = (inputName) => {
    return inputs[inputName] || "";
  };

  const Keybutton = () => {
    if (keyboardOverlay === false) {
      setKeyboardOverlay(true);
    } else {
      setKeyboardOverlay(false);
    }
  };

  const AdminLogin = () => {
    navigate("/dashboard");
  };

  const onFormSubmit = async (a) => {
    setIsLoading(true);
    a.preventDefault();
    dispatch(
      loginRequest({
        userName: `${inputs.username}`,
        password: `${inputs.password}`,
        type: "1",
        appToken: "",
      })
    );
    props.showAlert(
      "Please wait while we validate your Credentials",
      "warning"
    );
  };

  return (
    <React.Fragment>
      <form onSubmit={onFormSubmit}>
                    {/* Username Input Area */}
                    <div className="row g-0">
                      <div className="col-sm-2">
                        <i className="m-0 fs-3 text-light">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXklEQVR4nO3WPUhWURzH8ZsSKCiY2ODgIii06BC4+uBqpOAYLoEvg4OjNTkYNejk0hY6urgJJtQgbi4R4RDoKojYkJIIfuLSP3Dw+lx97g3C5wtnOr/z/543zr1JUqcK6MIMlrGCNxhCY1IGaMF7XLieb6gULW3HlxAc4S2GMYgJfIq+dFLjRYo/RuFNtGVkXuAXzjFQhPR5SNMVN1fJTkZ2uwjxehR7liP7AF8j31ur+AineJgzvxDil7VIG3GJ/VuMmQrxqzuLU/ADJ+k2JjnA6xBP58lngs9RaKCMfJ6bulFt1fGCpXzPu0OZpJcKe1FwEQ0ZuX4cRm4sKQI8wXEU3cEoOtCEPrzDWfQvFSL9C3qwK5ufmE3KwJ8HYgSrMYn0CLYwh87kvwOteFpSa71JXFEelduI04/7Wo3t4C7i+QKO70NdXN/q5F5ermZ0X2mPChA/jlo3/qH+M34DWCOgmc8ZLPIAAAAASUVORK5CYII=" />
                        </i>
                      </div>
                      <div className="col-sm-10">
                        <input
                          className="form-control FormIn"
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={getInputValue("username")}
                          onFocus={() => setInputName("username")}
                          onChange={onChangeInput}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <br />

                    {/* Password Input Area */}
                    <div className="row g-0">
                      <div className="col-sm-2">
                        <i className="fs-3 text-light">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR4nO3VP04CURRG8df7pzFxO2iFhNaNUBBbExakYQEsAVgDWGhjAXYm/ozm2pjIvOKONO8kU83JPZmvmVIaB8AlZljhDS9YYILz0ge4xc7fPGPYR/QjAg8Y4CSeKzzGu3eMM+fdxeHpAe8unFdcZIRnP19a4c7Dvc8Ir+PYoMK9DneZEd7HsdMK9yzcfUb4m77844cxxpM8thjVhL/EbDbVU2VTWvg3beosShdppRbuok39n1NvHeknMUqOb3DTGW6UnvgEzHdjQyPFdWoAAAAASUVORK5CYII=" />
                        </i>
                      </div>
                      <div className="col-sm-10">
                        <input
                          className="form-control FormIn"
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="off"
                          value={getInputValue("password")}
                          onFocus={() => setInputName("password")}
                          onChange={onChangeInput}
                          required
                        />
                      </div>
                    </div>
                    <br />
                    {/*Checkbox for remembering*/}
                    <div className="row g-5">
                      <div className="col-md-6">
                        {/*<div className="form-check RememberIn">*/}
                        {/*  <input*/}
                        {/*    className="form-check-input"*/}
                        {/*    type="checkbox"*/}
                        {/*    value=""*/}
                        {/*    id="flexCheckDefault"*/}
                        {/*    style={{ width: "15px", height: "15px" }}*/}
                        {/*  />*/}
                        {/*  <label*/}
                        {/*    className="form-check-label text-light"*/}
                        {/*    htmlFor="flexCheckDefault"*/}
                        {/*  >*/}
                        {/*    Remember*/}
                        {/*  </label>*/}
                        {/*</div>*/}
                      </div>
                      {/* Forgot Password Button  */}
                      <div className="col-md-6">
                        {/* <p className="text-light" style={{ fontSize: "12px" }}>
                        <Link to="/forgotpassword" className="text-light">
                          Forgot Password
                        </Link>
                      </p> */}
                      </div>
                    </div>
                    <br />
                    {/* Submit buttons */}
                    <button
                      className="btn btnLI"
                      type="submit"
                      disabled={isLoading}
                      onClick={() => {
                        document.body.requestFullscreen();
                      }}
                      // onClick={AdminLogin}
                    >
                      Login
                      {isLoading ? (
                        <div
                          className="spinner-border spinner-border-sm ms-3 text-light"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : null}
                    </button>
                  </form>
    </React.Fragment>
  );
};

export default LoginForm;

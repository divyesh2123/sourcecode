import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./styles/styles.css";
import LoginForm from "../../components/login/LoginForm";

const Login = (props) => {
 
  return (
    <React.Fragment>
      <div className="bgGrad"></div>
      <center>
        <div className="bg">
          <div className="BackCont">
            <div className="refPar row align-items-center d-flex justify-content-between">
              <div className="parDiv col-md-7">
                {/*Banner Image */}
                <LazyLoadImage
                  className="mx-5 w-75"
                  id="MainBanner"
                  placeholderSrc={require("../../Theme/assets/images/POS/Asset 1-8-min.png")}
                  src={require("../../Theme/assets/images/POS/Asset 1-8-min.png")}
                  alt=""
                  effect="blur"
                  // width={"92%"}
                />
              </div>
              <div className="parDiv col-md-4 me-5">
                <div className="containerForm">
                  <div className="row px-3 h-50">
                    {/* Logo image assest */}
                    <img
                      src={require("../../Theme/assets/images/POS/GSS Logo Png/GSS Logo 2.png")}
                      alt=""
                      width={"260px"}
                      id="LogoImage"
                    />
                  </div>
                  <br />
                  <p className="text-light fs-6" style={{ marginLeft: "3rem" }}>
                    USER LOGIN
                  </p>

                    <LoginForm {...props}></LoginForm>
                 
                </div>
              </div>
            </div>
          </div>
          {/* Right Hand side Column */}
        </div>
        {/*</div>*/}
      </center>
    </React.Fragment>
  );
};

export default Login;

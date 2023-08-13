import React from "react";
import "./style.css";

const Alert = (props) => {
  return (
    <center>
      <div
        className="position-fixed px-2 pt-1 sticky-top z-3 alert-Custom"
        style={{ right: "2%", top: "30px" }}
      >
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type} fade show text-break px-4`}
            role="alert"
          >
            <strong className={`fs-5`}>{props.alert.msg}</strong>
          </div>
        )}
      </div>
    </center>
  );
};

export default Alert;

import React from "react";
import "./style.css";
import { Modal, ModalBody } from "reactstrap";

const SweetAlert = (props) => {
  function tog_backdrop() {
    props.setmodal_backdrop(!props.modal_backdrop);
  }
  return (
    <React.Fragment>
      {props.sAlert ? (
        <Modal
          zIndex={2000}
          isOpen={props.modal_backdrop}
          toggle={() => {
            tog_backdrop();
          }}
          backdrop={"static"}
          id="staticBackdrop"
          centered
        >
          <ModalBody className="text-center p-5">
            {/* <lord-icon
              src="https://cdn.lordicon.com/lupuorrc.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              style={{ width: "120px", height: "120px" }}
            ></lord-icon> */}
            {props.sAlert.type === "danger" ? (
              <img
                src={require("../../Theme/assets/images/IconAlert/close.png")}
                alt=""
              />
            ) : null}
            {props.sAlert.type === "success" ? (
              <img
                src={require("../../Theme/assets/images/IconAlert/check.png")}
                alt=""
              />
            ) : null}
            {props.sAlert.type === "warning" ? (
              <img
                src={require("../../Theme/assets/images/IconAlert/warning.png")}
                alt=""
              />
            ) : null}
            {props.sAlert.type === "info" ? (
              <img
                // src={require("../Theme/assets/images/IconAlert/warning.png")}
                alt=""
              />
            ) : null}

            <div className="mt-4">
              <h4 className="mb-3">{props.sAlert.tit}</h4>
              <p className="text-muted mb-4">{props.sAlert.msg}</p>
              <div className="hstack gap-2 justify-content-center">
                <button
                  className="btn custom-Red btn-lg fw-medium"
                  onClick={() => props.setmodal_backdrop(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default SweetAlert;

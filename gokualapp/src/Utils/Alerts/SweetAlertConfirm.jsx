import React from "react";
import "./style.css";
import { Modal, ModalBody } from "reactstrap";
import { useDispatch } from "react-redux";


const SweetAlertConfirm = (props) => {
  const dispatch = useDispatch();
  function tog_backdrop() {
    props.setmodal_backdrop(!props.modal_backdrop);
  }
  return (
    <React.Fragment>
      {props.sConfirm ? (
        <Modal
          isOpen={props.modal_backdrop}
          toggle={() => {
            tog_backdrop();
          }}
          backdrop={"static"}
          id="sweetConfirm"
          zIndex={4000}
          centered
        >
          <ModalBody className="text-center p-5">
            {props.sConfirm.type === "danger" ? (
              <img
                src={require("../../Theme/assets/images/IconAlert/close.png")}
                alt=""
              />
            ) : null}
            {props.sConfirm.type === "success" ? (
              <img
                src={require("../../Theme/assets/images/IconAlert/check.png")}
                alt=""
              />
            ) : null}
            {props.sConfirm.type === "warning" ? (
              <img
                src={require("../../Theme/assets/images/IconAlert/warning.png")}
                alt=""
              />
            ) : null}
            {props.sConfirm.type === "info" ? (
              <img
                // src={require("../Theme/assets/images/IconAlert/warning.png")}
                alt=""
              />
            ) : null}

            <div className="mt-4">
              <h4 className="mb-3">{props.sConfirm.tit}</h4>
              <p className="text-muted mb-0">{props.sConfirm.msg}</p>
            </div>
          </ModalBody>

          <div className="hstack gap-2 pb-3 justify-content-center">
            <button
              className="btn custom-Green add-btn"
              onClick={() => {
                dispatch(props.sConfirm.method);
                props.setmodal_backdrop(false);
              }}
            >
              Confirm
            </button>
            <button
              className="btn custom-Red add-btn fw-medium"
              onClick={() => {
                props.setmodal_backdrop(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default SweetAlertConfirm;

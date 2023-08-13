const FormHeader = (props) => {

    return (
        <div className="modal-header p-3 pb-2">
        <h5 className="text-center text-light">
         {props.name}
        </h5>
      </div>
    )

}

export default FormHeader;
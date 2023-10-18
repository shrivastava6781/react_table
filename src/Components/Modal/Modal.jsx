import { createPortal } from "react-dom";
import "./Modal.css"
const ModalComponent = (props) => {
    const { setModalOpen, children } = props;
    return createPortal(
      <div className="modal-div">
        <button
          className="modal-close"
          type="button"
          onClick={() => setModalOpen(false)}
        >
          Close
        </button>
        {children}
      </div>,
      document.body
    );
  };

  export default ModalComponent;
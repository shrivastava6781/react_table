import { useEffect, useRef, useState } from "react";
import "./FileUploadModal.css"
import FileUpload from "../FileUpload/FileUpload";
import ModalComponent from "../Modal/Modal";
const FileUploadModal = () => {
    const [fileUploadModal, setFileUploadModal] = useState(false);
    const fileUploadRef = useRef();
    const disableBodyScroll  = () => {
      const [body] = document.getElementsByTagName("body");
      body.style.overflow = "hidden";
    }
    const enableBodyScroll = () => {
      const [body] = document.getElementsByTagName("body");
      body.style.overflow = "auto";
    }
    useEffect(()=> {
      if(fileUploadModal){
        fileUploadRef.current.scrollIntoView();
      } 
      fileUploadModal ? disableBodyScroll() : enableBodyScroll()
    },[fileUploadModal])
    return ( <>
          <button onClick={()=> setFileUploadModal(true)}>Upload Images</button>
      {
        fileUploadModal && (<div ref={fileUploadRef} className="file-upload-modal-container"> <ModalComponent setModalOpen={setFileUploadModal}>
          <FileUpload />
        </ModalComponent>
        </div>)
      }
      </>
    );
  }

  export default FileUploadModal
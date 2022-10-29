import React from "react";
import overlayStyles from "./modalOverlay.module.css"

const ModalOverlay = ({setState}) => {
  return ( 
    <button className={overlayStyles.modal__overlay} onClick={() => setState(true)}>
    </button>
  );
}
 
export default ModalOverlay;
import React from "react";
import overlayStyles from "./modalOverlay.module.css"

const ModalOverlay = ({setState, state}) => {
  return ( 
    <button className={state === false ? overlayStyles.modal__overlay : overlayStyles.modal__overlay__disabled  } onClick={() => setState(true)}>
    </button>
  );
}
 
export default ModalOverlay;
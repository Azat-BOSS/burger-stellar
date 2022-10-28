import React from "react";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css"
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({children, state, setState}) => {

  return ReactDOM.createPortal( 
    <div className={state === false ? modalStyles.modal__container  :  modalStyles.modal__container__disabled}>
      <ModalOverlay/>
      <div className={modalStyles.modal}>
      <button className={modalStyles.button__close} onClick={() => setState(true)}>
        <CloseIcon type="primary"/>
      </button>
        {children}
      </div>
    </div>,
    
    document.getElementById('modal')
  );
}

 
export default Modal;
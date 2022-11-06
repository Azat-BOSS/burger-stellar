import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css"
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({children, state, setState}) => {
  useEffect(() => {
    const handleEscClose = (evt) => {
      if(evt.key === "Escape") {
        setState(true)
      }
    }
    document.addEventListener("keydown", handleEscClose)
    return() => {
      document.removeEventListener("keyup", handleEscClose)
    }
  }, [setState])

  return ReactDOM.createPortal( 
    <>
    <div className={state === false ? modalStyles.modal__container : modalStyles.modal__container__disabled}>
      <div className={modalStyles.modal}>
      <button className={modalStyles.button__close} onClick={() => setState(true)}>
        <CloseIcon type="primary"/>
      </button>
        {children}
      </div>
      <ModalOverlay setState={setState} state={state}/>
    </div>
    </>,
    
    document.getElementById('modal')
  );
}


export default Modal;
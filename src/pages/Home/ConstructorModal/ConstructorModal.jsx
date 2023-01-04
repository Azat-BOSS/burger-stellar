import React from "react";
import { useSelector } from "react-redux";
import doneImage from "../../../assets/icons/done.png"
import constructStyles from "./constrModal.module.css"

const ConstructorModal = () => {
  const orderNumber = useSelector(state => state.orderRequestSlice.order)

  return ( 
   <div className={constructStyles.constr__modal}>
    <h2 className={constructStyles.constr__title}>{orderNumber}</h2>
    <p className={constructStyles.constr__subtitle}>идентификатор заказа</p>
    <img src={doneImage} alt="illustration" className={constructStyles.constr__img__done} />
    <p className={constructStyles.constructor__upper__text}>Ваш заказ начали готовить</p>
    <p className={constructStyles.constructor__lower__text}>Дождитесь готовности на орбитальной станции</p>
   </div>
  );
}
 
export default ConstructorModal;
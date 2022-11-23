import React, { useContext } from "react";
import doneImage from "../../images/icons/done.png"
import { ConstructContext } from "../../services/appContext";
import constructStyles from "./constrModal.module.css"

const ConstructorModal = () => {

  const { orderNumber }  = useContext(ConstructContext)
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
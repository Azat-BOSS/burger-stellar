import React from "react";
import doneImage from "../../images/icons/done.png"
import constructStyles from "./constrModal.module.css"

const ConstructorModal = () => {
  return ( 
   <div className={constructStyles.constr__modal}>
    <h2 className={constructStyles.constr__title}>034536</h2>
    <p className={constructStyles.constr__subtitle}>идентификатор заказа</p>
    <img src={doneImage} alt="image" className={constructStyles.constr__img__done} />
    <p className={constructStyles.constructor__upper__text}>Ваш заказ начали готовить</p>
    <p className={constructStyles.constructor__lower__text}>Дождитесь готовности на орбитальной станции</p>
   </div>
  );
}
 
export default ConstructorModal;
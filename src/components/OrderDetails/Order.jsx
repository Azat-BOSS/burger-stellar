import React from "react";
import orderStyles from "./order.module.css"
import PropTypes from "prop-types"
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { removeConstructElement } from "../../services/actions/action";
import { useDispatch } from "react-redux";

const Order = ({position, locked, name, price, image, id}) => {
  const dispatch = useDispatch()
  return ( 
    <div  className={position === "top" || position === "bottom" ? orderStyles.order : null}>
      {position !== "top" && position !== "bottom" ? <DragIcon type="primary" style={{display: "none"}}/> : null}
      <ConstructorElement
      type={position}
      isLocked={locked}
      text={name}
      price={price}
      thumbnail={image}
      handleClose={() =>  dispatch(removeConstructElement(id))}
    />
  </div>
  );
}
 
Order.propTypes = {
  position: PropTypes.string,
  locked: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
}

export default Order;
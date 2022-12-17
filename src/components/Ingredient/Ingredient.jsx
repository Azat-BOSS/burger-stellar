import React, { useMemo } from "react";
import ingredientStyles from "./ingredient.module.css"
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types"
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

const Ingredient = ({image, text, price, item}) => {
  const getBuns = useSelector(state => state.getConstructor.constructBun)
  const elemChosen = useSelector(state => state.getConstructor.construct)
    .filter(el => item._id === el._id)
  
  const [{isDragging}, drag] = useDrag({
    type: "ingredElement",
    item: item,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? .6 : 1
  
  const count = useMemo(() => {
    if(item.type === "bun") {
      return getBuns && getBuns._id === item._id ? 2 : 0
    }
    return elemChosen.length
  }, )
  return ( 
    <div className={ingredientStyles.ingredient} ref={drag} style={{ opacity }}>
      {count === 0 ? null : (<Counter count={count} size="default" extraClass="m-1"/>)}
      <img src={image} alt="картинка" className="ingredient__image"/>
      <div className={ingredientStyles.ingredient__block__number}>
        <p className={ingredientStyles.ingredient__number}>{price}</p>
        <CurrencyIcon type="primary" className="ingredient__icon"/>
      </div>
      <p className={ingredientStyles.ingredient__paragraph}>{text}</p>
    </div> 
  );
}

Ingredient.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    item: PropTypes.object.isRequired
}
 
export default Ingredient;
import React from "react";
import ingredientStyles from "./ingredient.module.css"
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import { useDrag } from "react-dnd";


const IngredientsDetails = ({image, text, price, item}) => {
  const [{isDragging}, drag] = useDrag({
    type: "ingredElement",
    item: item,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? .6 : 1

  return ( 
    <div className={ingredientStyles.ingredient} ref={drag} style={{ opacity }}>
      <img src={image} alt="картинка" className="ingredient__image"/>
      <div className={ingredientStyles.ingredient__block__number}>
        <p className={ingredientStyles.ingredient__number}>{price}</p>
        <CurrencyIcon type="primary" className="ingredient__icon"/>
      </div>
      <p className={ingredientStyles.ingredient__paragraph}>{text}</p>
    </div> 
  );
}
 
export default IngredientsDetails;
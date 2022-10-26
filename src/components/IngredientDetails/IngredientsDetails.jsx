import React from "react";
import ingredientStyles from "./ingredient.module.css"
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientsDetails = ({image, text, price}) => {
  return ( 
    <div className={ingredientStyles.ingredient}>
      
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
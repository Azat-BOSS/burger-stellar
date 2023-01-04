import React from "react";
import { useSelector } from "react-redux";
import ingDetStyle from "./IngredientDetails.module.css"

const IngredientDetails = () => {
  const ingDetails = useSelector(state => state.ingredientDetails.detailsArr)
  return ( 
    <div className={ingDetStyle.ingredient__modal}>
      <h4 className={ingDetStyle.ingredient__title}>Детали ингредиента</h4>
      <img src={ingDetails.image} alt={ingDetails.name} className={ingDetStyle.ingredient__modal__img}/>
      <div className={ingDetStyle.ingredient__structure}>
        <h3 className={ingDetStyle.ingredient__title__name}>{ingDetails.name}</h3>
        <div className={ingDetStyle.ingredient__block__container}>
          <span className={ingDetStyle.ingredient__block}>
            <h5 className={ingDetStyle.ingredient__block__name}>Калории, ккал</h5>
            <p className={ingDetStyle.ingredient__block__num}>{ingDetails.calories}</p>
          </span>
          <span className={ingDetStyle.ingredient__block}>
            <h5 className={ingDetStyle.ingredient__block__name}>Белки, г</h5>
            <p className={ingDetStyle.ingredient__block__num}>{ingDetails.proteins}</p>
          </span>
          <span className={ingDetStyle.ingredient__block}>
            <h5 className={ingDetStyle.ingredient__block__name}>Жиры, г</h5>
            <p className={ingDetStyle.ingredient__block__num}>{ingDetails.fat}</p>
          </span>
          <span className={ingDetStyle.ingredient__block}>
            <h5 className={ingDetStyle.ingredient__block__name}>Углеводы, г</h5>
            <p className={ingDetStyle.ingredient__block__num}>{ingDetails.carbohydrates}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
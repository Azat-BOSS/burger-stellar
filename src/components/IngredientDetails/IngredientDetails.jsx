import React from "react";
import ingDetlStyle from "./IngredientDetails.module.css"
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const modalData = useSelector(state => state.ingredDetails.ingredData)
  return ( 
    <div className={ingDetlStyle.ingredient__modal}>
      <h4 className={ingDetlStyle.ingredient__title}>Детали ингредиента</h4>
      <img src={modalData.image} alt={modalData.name} className={ingDetlStyle.ingredient__modal__img}/>
      <div className={ingDetlStyle.ingredient__structure}>
        <h3 className={ingDetlStyle.ingredient__title__name}>{modalData.name}</h3>
        <div className={ingDetlStyle.ingredient__block__container}>
          <span className={ingDetlStyle.ingredient__block}>
            <h5 className={ingDetlStyle.ingredient__block__name}>Калории, ккал</h5>
            <p className={ingDetlStyle.ingredient__block__num}>{modalData.calories}</p>
          </span>
          <span className={ingDetlStyle.ingredient__block}>
            <h5 className={ingDetlStyle.ingredient__block__name}>Белки, г</h5>
            <p className={ingDetlStyle.ingredient__block__num}>{modalData.proteins}</p>
          </span>
          <span className={ingDetlStyle.ingredient__block}>
            <h5 className={ingDetlStyle.ingredient__block__name}>Жиры, г</h5>
            <p className={ingDetlStyle.ingredient__block__num}>{modalData.fat}</p>
          </span>
          <span className={ingDetlStyle.ingredient__block}>
            <h5 className={ingDetlStyle.ingredient__block__name}>Углеводы, г</h5>
            <p className={ingDetlStyle.ingredient__block__num}>{modalData.carbohydrates}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
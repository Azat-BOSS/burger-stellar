import React from "react";
import ingModalStyle from "./ingredientModal.module.css"

const IngredientModal = ({ingredient}) => {
  return ( 
    <div className={ingModalStyle.ingredient__modal}>
      <h4 className={ingModalStyle.ingredient__title}>Детали ингредиента</h4>
      <img src="" alt="ingredient" className={ingModalStyle.ingredient__modal__img}/>
      <div className={ingModalStyle.ingredient__structure}>
        <h3 className={ingModalStyle.ingredient__title__name}>Биокотлета из марсианской Магнолии</h3>
        <div className={ingModalStyle.ingredient__block__container}>
          <span className="ingredient__block">
            <h5 className={ingModalStyle.ingredient__block__name}>Калории, ккал</h5>
            <p className={ingModalStyle.ingredient__block__num}></p>
          </span>
          <span className="ingredient__block">
            <h5 className={ingModalStyle.ingredient__block__name}>Белки, г</h5>
            <p className={ingModalStyle.ingredient__block__num}></p>
          </span>
          <span className="ingredient__block">
            <h5 className={ingModalStyle.ingredient__block__name}>Жиры, г</h5>
            <p className={ingModalStyle.ingredient__block__num}></p>
          </span>
          <span className="ingredient__block">
            <h5 className={ingModalStyle.ingredient__block__name}>Углеводы, г</h5>
            <p className={ingModalStyle.ingredient__block__num}></p>
          </span>
        </div>
      </div>
    </div>
  );
}
 
export default IngredientModal;
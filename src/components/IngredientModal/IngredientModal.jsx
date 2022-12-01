import React from "react";
import ingModalStyle from "./ingredientModal.module.css"
import { useSelector } from "react-redux";

const IngredientModal = () => {
  const modalData = useSelector(state => state.ingredDetails.ingredData)
  return ( 
    <div className={ingModalStyle.ingredient__modal}>
      <h4 className={ingModalStyle.ingredient__title}>Детали ингредиента</h4>
      <img src={modalData.image} alt="ingredient" className={ingModalStyle.ingredient__modal__img}/>
      <div className={ingModalStyle.ingredient__structure}>
        <h3 className={ingModalStyle.ingredient__title__name}>{modalData.name}</h3>
        <div className={ingModalStyle.ingredient__block__container}>
          <span className={ingModalStyle.ingredient__block}>
            <h5 className={ingModalStyle.ingredient__block__name}>Калории, ккал</h5>
            <p className={ingModalStyle.ingredient__block__num}>{modalData.calories}</p>
          </span>
          <span className={ingModalStyle.ingredient__block}>
            <h5 className={ingModalStyle.ingredient__block__name}>Белки, г</h5>
            <p className={ingModalStyle.ingredient__block__num}>{modalData.proteins}</p>
          </span>
          <span className={ingModalStyle.ingredient__block}>
            <h5 className={ingModalStyle.ingredient__block__name}>Жиры, г</h5>
            <p className={ingModalStyle.ingredient__block__num}>{modalData.fat}</p>
          </span>
          <span className={ingModalStyle.ingredient__block}>
            <h5 className={ingModalStyle.ingredient__block__name}>Углеводы, г</h5>
            <p className={ingModalStyle.ingredient__block__num}>{modalData.carbohydrates}</p>
          </span>
        </div>
      </div>
    </div>
  );
}


 
export default IngredientModal;
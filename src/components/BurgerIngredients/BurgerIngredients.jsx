import React from "react";
import brgIngredientsStyles from "./brgIngredients.module.css"
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types"

const BurgerIngredients = ({data}) => {
  const [current, setCurrent] = React.useState('one')



    return ( 
      <section className={brgIngredientsStyles.ingredients}>
        <h1 className={brgIngredientsStyles.ingredients__title}>Соберите бургер</h1>

        <div style={{ display: 'flex', marginBottom: "20px" }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          One
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Two
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Three
        </Tab>
      </div>

      <div className={brgIngredientsStyles.ingredients__container}>
        <h3 className={brgIngredientsStyles.ingredients__container__title}>Булки</h3>
        <div className={brgIngredientsStyles.ingredients__block}>
        {data.map(block => (
          block.type === "bun" && <IngredientsDetails image={block.image} text={block.name} price={block.price} key={block._id}/>
        ))}
        </div>
        <h3 className={brgIngredientsStyles.ingredients__container__title}>Соусы</h3>
        <div className={brgIngredientsStyles.ingredients__block}>
        {data.map(block => (
          block.type === "sauce" && <IngredientsDetails image={block.image} text={block.name} price={block.price} key={block._id}/>
        ))}
        </div>
        <h3 className={brgIngredientsStyles.ingredients__container__title}>Начинки</h3>
        <div className={brgIngredientsStyles.ingredients__block}>
        {data.map(block => (
          <IngredientsDetails image={block.image} text={block.name} price={block.price} key={block._id}/>
        ))}
        </div>
      </div>
      </section>
    );
  }

 
BurgerIngredients.propTypes = {
  data: PropTypes.array
}

export default BurgerIngredients
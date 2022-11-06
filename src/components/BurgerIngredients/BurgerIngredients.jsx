import React, { useState } from "react";
import brgIngredientsStyles from "./brgIngredients.module.css"
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../Modal/Modal";
import PropTypes from "prop-types"
import IngredientModal from "../IngredientModal/IngredientModal";

const BurgerIngredients = ({ingredData, state, setState}) => {
  const [current, setCurrent] = React.useState('one')
  const [modalData, setModalData] = useState({})
  
    return ( 
      <section className={brgIngredientsStyles.ingredients}>
        <h1 className={brgIngredientsStyles.ingredients__title}>Соберите бургер</h1>

        <div className={brgIngredientsStyles.ingredients__tab}>
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
        <h3 id="buns" className={brgIngredientsStyles.ingredients__container__title}>Булки</h3>
        <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="buns">
        {ingredData.map((block) => (
          block.type === "bun" && <li key={block._id} onClick={() => {setState(false); setModalData(block)}} 
          aria-grabbed="false" /* aria-haspopup="true" */ tabIndex="0">
            <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
          </li> 
        ))}
        </ul>
        <h3 id="sauces" className={brgIngredientsStyles.ingredients__container__title}>Соусы</h3>
        <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="sauces">
        {ingredData.map(block => (
          block.type === "sauce" && <li key={block._id} onClick={() => {setState(false); setModalData(block); setCurrent("two")}}
          aria-grabbed="false" /* aria-haspopup="true" */ tabIndex="1">
            <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
          </li> 
        ))}
        </ul>
        <h3 id="stuffing" className={brgIngredientsStyles.ingredients__container__title} aria-labelledby="stuffing">Начинки</h3>
        <ul className={brgIngredientsStyles.ingredients__block}>
        {ingredData.map(block => (
          <li key={block._id} onClick={() => {setState(false); setModalData(block)}} 
          aria-grabbed="false" /* aria-haspopup="true" */ tabIndex="2">
            <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
          </li> 
        ))}
        </ul>
      </div> 

          <Modal state={state} setState={setState}>
            <IngredientModal modalData={modalData}/>
          </Modal>

      </section>
    );
  }

  BurgerIngredients.propTypes = {
    ingredData: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      detail: PropTypes.number,
      _id: PropTypes.string,
    })),
    state: PropTypes.bool,
    setState: PropTypes.func.isRequired
  }


export default BurgerIngredients
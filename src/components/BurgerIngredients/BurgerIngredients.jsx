import React from "react";
import brgIngredientsStyles from "./brgIngredients.module.css"
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../Modal/Modal";
import PropTypes from "prop-types"
import IngredientModal from "../IngredientModal/IngredientModal";

const BurgerIngredients = ({data, modalData, setModalData, state, setState}) => {
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
        {data.map((block) => (
          block.type === "bun" && <button key={block._id} onClick={() => {setState(false); setModalData(block)}}>
            <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
          </button> 
        ))}
        </div>
        <h3 className={brgIngredientsStyles.ingredients__container__title}>Соусы</h3>
        <div className={brgIngredientsStyles.ingredients__block}>
        {data.map(block => (
          block.type === "sauce" && <button key={block._id} onClick={() => {setState(false); setModalData(block); setCurrent("two")}}>
            <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
          </button> 
        ))}
        </div>
        <h3 className={brgIngredientsStyles.ingredients__container__title}>Начинки</h3>
        <div className={brgIngredientsStyles.ingredients__block}>
        {data.map(block => (
          <button key={block._id} onClick={() => {setState(false); setModalData(block)}}>
            <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
          </button> 
        ))}
        </div>
      </div> 
          <Modal state={state} setState={setState}>
            <IngredientModal modalData={modalData}/>
          </Modal>

      </section>
    );
  }

  BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      detail: PropTypes.number
    }))
  }


export default BurgerIngredients
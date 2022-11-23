import React, { useContext, useState, useRef} from "react";
import brgIngredientsStyles from "./brgIngredients.module.css"
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../Modal/Modal";
import IngredientModal from "../IngredientModal/IngredientModal";
import { IngredientContext } from "../../services/appContext.jsx"

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('one')
  const [modalData, setModalData] = useState({})

  const {ingred, setIngred, addElement, addIdPost, data} = useContext(IngredientContext)

    const blockBuns = useRef()
    const blockSauces = useRef()
    const blockMain = useRef()

    const scrollToBlock = (element) => {
      element.current.scrollIntoView({
        behavior: "smooth"
      })
    }

    return ( 
      <section className={brgIngredientsStyles.ingredients}>
        <h1 className={brgIngredientsStyles.ingredients__title}>Соберите бургер</h1>

        <div className={brgIngredientsStyles.ingredients__tab}>
          <Tab value="one" active={current === 'one'} onClick={() => {setCurrent("one"); scrollToBlock(blockBuns)}}>
            One
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={() => {setCurrent("two"); scrollToBlock(blockSauces)}}>
            Two
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={() => {setCurrent("three"); scrollToBlock(blockMain)}}>
            Three
          </Tab>
        </div>

        <div className={brgIngredientsStyles.ingredients__container}>
          <h3 id="buns" ref={blockBuns} className={brgIngredientsStyles.ingredients__container__title}>Булки</h3>
          <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="buns">
          {data.map((block) => (
            block.type === "bun" && <li key={block._id} onClick={() => {setIngred(false); setModalData(block); addElement(block); addIdPost(block._id)}} 
            aria-grabbed="false" /* aria-haspopup="true" */ tabIndex="0">
              <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
            </li> 
          ))}
          </ul>
          <h3 id="sauces" ref={blockSauces} className={brgIngredientsStyles.ingredients__container__title}>Соусы</h3>
          <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="sauces">
          {data.map(block => (
            block.type === "sauce" && <li key={block._id} onClick={() => {setIngred(false); setModalData(block); setCurrent("two"); addElement(block); addIdPost(block._id)}}
            aria-grabbed="false" /* aria-haspopup="true" */ tabIndex="1">
              <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
            </li> 
          ))}
          </ul>
          <h3 id="stuffing" ref={blockMain} className={brgIngredientsStyles.ingredients__container__title} aria-labelledby="stuffing">Начинки</h3>
          <ul className={brgIngredientsStyles.ingredients__block}>
          {data.map(block => (
            block.type === "main" && <li key={block._id} onClick={() => {setIngred(false); setModalData(block); addElement(block); addIdPost(block._id)}} 
            aria-grabbed="false" /* aria-haspopup="true" */ tabIndex="2">
              <IngredientsDetails image={block.image} text={block.name} price={block.price}/>
            </li>
          ))}
          </ul>
        </div> 

        <Modal state={ingred} setState={setIngred}>
          <IngredientModal modalData={modalData}/>
        </Modal>

      </section>
    );
  }

export default BurgerIngredients
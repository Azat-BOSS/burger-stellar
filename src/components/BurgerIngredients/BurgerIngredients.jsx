import React, { useState, useRef, useEffect} from "react";
import brgIngredientsStyles from "./brgIngredients.module.css"
import IngredientsDetails from "../IngredientDetails/IngredientsDetails";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../Modal/Modal";
import IngredientModal from "../IngredientModal/IngredientModal";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../services/actions/action";

import { getIdIngred, getIngredDataElement } from "../../services/actions/action";

const BurgerIngredients = () => {
    const [ingred, setIngred] = useState(true)
    const [current, setCurrent] = useState('one')

    const data = useSelector(state => state.getRequest.data)

    const blockBuns = useRef()
    const blockSauces = useRef()
    const blockMain = useRef()

    const dispatch = useDispatch()
    useEffect(()=> {
      dispatch(getInfo())
  }, [dispatch])
  
    const scrollToBlock = (element) => {
      element.current.scrollIntoView({
        behavior: "smooth"
      })
    }

    return ( 
      <section className={brgIngredientsStyles.ingredients}>
        <h1 className={brgIngredientsStyles.ingredients__title}>Соберите бургер</h1>

        <div className={brgIngredientsStyles.ingredients__tab}>
          <Tab active={current === 'one'} onClick={() => {setCurrent("one"); scrollToBlock(blockBuns)}}>
            Булки
          </Tab>
          <Tab active={current === 'two'} onClick={() => {setCurrent("two"); scrollToBlock(blockSauces);}}>
            Соусы
          </Tab>
          <Tab active={current === 'three'} onClick={() => {setCurrent("three"); scrollToBlock(blockMain)}}>
            Начинки
          </Tab>
        </div>

        <div className={brgIngredientsStyles.ingredients__container}>
          <h3 id="buns" ref={blockBuns} className={brgIngredientsStyles.ingredients__container__title}>Булки</h3>
          <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="buns">
          {data.map((block) => (
            block.type === "bun" && <li key={block._id} 
              onClick={() => {
              setIngred(false); 
              dispatch(getIngredDataElement(block)); 
              }} 
              onMouseDown={() => {
                dispatch(getIdIngred(block._id))
              }}
            >
              <IngredientsDetails image={block.image} text={block.name} price={block.price} id={block._id}/>
            </li> 
          ))}
          </ul>

          <h3 id="sauces" ref={blockSauces} className={brgIngredientsStyles.ingredients__container__title}>Соусы</h3>
          <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="sauces">
          {data.map(block => (
            block.type === "sauce" && <li key={block._id} onClick={() => {
              setIngred(false); 
              dispatch(getIngredDataElement(block)); 
              setCurrent("two");  
              }}
              onMouseDown={() => {
                dispatch(getIdIngred(block._id))
              }}
            >
              <IngredientsDetails image={block.image} text={block.name} price={block.price} id={block._id}/>
            </li> 
          ))}
          </ul>

          <h3 id="stuffing" ref={blockMain} className={brgIngredientsStyles.ingredients__container__title}>Начинки</h3>
          <ul className={brgIngredientsStyles.ingredients__block}>
          {data.map(block => (
            block.type === "main" && <li key={block._id} onClick={() => {
              setIngred(false);
              dispatch(getIngredDataElement(block)); 
              }} 
              onMouseDown={() => {
                dispatch(getIdIngred(block._id))
              }}
            >
              <IngredientsDetails image={block.image} text={block.name} price={block.price} id={block._id}/>
            </li>
          ))}
          </ul>
        </div> 

        <Modal state={ingred} setState={setIngred}>
          <IngredientModal/>
        </Modal>
      </section>
    );
  }

export default BurgerIngredients
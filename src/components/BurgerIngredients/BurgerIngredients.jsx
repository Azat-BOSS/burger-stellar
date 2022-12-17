import React, { useState, useRef, useEffect} from "react";
import brgIngredientsStyles from "./brgIngredients.module.css"
import Ingredient from "../Ingredient/Ingredient";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../services/actions/action";
import { getIdIngred, getIngredDataElement } from "../../services/actions/action";
import { useInView } from "react-intersection-observer";

const BurgerIngredients = () => {
    const [ingred, setIngred] = useState(true)
    const [current, setCurrent] = useState('one')

    const data = useSelector(state => state.getRequest.data)

    const dispatch = useDispatch()
    useEffect(()=> {
      dispatch(getInfo())
  }, [dispatch])
  
    
    const [blockBuns, bunsView] = useInView({ threshold: 0 })
    const [blockSauces, saucesView] = useInView({ threshold: 0 })
    const [blockMain, mainView] = useInView({ threshold: 0 })

    const scrollToBlock = (element) => {
      setCurrent(element)
      document
      .querySelector(`#${element}`)
      .scrollIntoView({
        behavior: "smooth"
      })
      console.log(element);
    }

    useEffect(() => {
      if (bunsView) {
        setCurrent("one");
      } else if (saucesView) {
        setCurrent("two");
      } else if (mainView) {
        setCurrent("three");
      }
    }, [bunsView, saucesView, mainView]);
    
    return (
      <section className={brgIngredientsStyles.ingredients}>
        <h1 className={brgIngredientsStyles.ingredients__title}>Соберите бургер</h1>

        <div className={brgIngredientsStyles.ingredients__tab}>
          <Tab active={current === 'one'} onClick={() => scrollToBlock("one")}>
            Булки
          </Tab>
          <Tab active={current === 'two'} onClick={() => scrollToBlock("two")}>
            Соусы
          </Tab>
          <Tab active={current === 'three'} onClick={() => scrollToBlock("three")}>
            Начинки
          </Tab>
        </div>

        <div className={brgIngredientsStyles.ingredients__container}>
          <h3 ref={blockBuns} id="one" className={brgIngredientsStyles.ingredients__container__title}>Булки</h3>
          <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="buns">
          {data.map((block) => (
            block.type === "bun" && <li key={block._id} 
              onClick={() => {
              setIngred(false); 
              dispatch(getIngredDataElement(block));
              }}
              onMouseDown={() =>  dispatch(getIdIngred(block._id))}
            >
              <Ingredient image={block.image} text={block.name} price={block.price} item={block}/>
            </li> 
          ))}
          </ul>

          <h3 ref={blockSauces} id="two" className={brgIngredientsStyles.ingredients__container__title}>Соусы</h3>
          <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="sauces">
          {data.map((block, ) => (
            block.type === "sauce" && <li key={block._id} onClick={() => {
              setIngred(false); 
              dispatch(getIngredDataElement(block));
              }}
            >
              <Ingredient image={block.image} text={block.name} price={block.price} item={block}/>
            </li> 
          ))}
          </ul>

          <h3 ref={blockMain} id="three" className={brgIngredientsStyles.ingredients__container__title}>Начинки</h3>
          <ul className={brgIngredientsStyles.ingredients__block}>
          {data.map((block, ) => (
            block.type === "main" && <li key={block._id} onClick={() => {
              setIngred(false);
              dispatch(getIngredDataElement(block)); 
              }}
              onMouseDown={() =>  dispatch(getIdIngred(block._id))}
            >
              <Ingredient image={block.image} text={block.name} price={block.price} item={block} />
            </li>
          ))}
          </ul>
        </div> 

        <Modal state={ingred} setState={setIngred}>
          <IngredientDetails/>
        </Modal>
      </section>
    );
  }



export default BurgerIngredients
import React, { useState, useEffect} from "react";
import brgIngredientsStyles from "./brgIngredients.module.css"
import Ingredient from "../Ingredient/Ingredient";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../../../components/Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { getDataIngredients } from "../../../services/reducers/HomeReducers/getIngredients";
import { useInView } from "react-intersection-observer";
import { getIngDetails } from "../../../services/reducers/HomeReducers/ingredientDetails";

const BurgerIngredients = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.getIngredients.data.data)

    const [ingred, setIngred] = useState(true)
    const [current, setCurrent] = useState('one')
    
    const [blockBuns, bunsView] = useInView({ threshold: 0 })
    const [blockSauces, saucesView] = useInView({ threshold: 0 })
    const [blockMain, mainView] = useInView({ threshold: 0 })

    useEffect(()=> {
      dispatch(getDataIngredients())
    }, [dispatch])

    useEffect(() => {
      if (bunsView) {
        setCurrent("one");
      } else if (saucesView) {
        setCurrent("two");
      } else if (mainView) {
        setCurrent("three");
      }
    }, [bunsView, saucesView, mainView]);

    const scrollToBlock = (element) => {
      setCurrent(element)
      document
      .querySelector(`#${element}`)
      .scrollIntoView({
        behavior: "smooth"
      })
    }
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
          {data && data.map((block) => (
            block.type === "bun" && <li key={block._id} 
              onClick={() => {
              setIngred(false); 
              dispatch(getIngDetails(block));
              }}
            >
              <Ingredient image={block.image} text={block.name} price={block.price} item={block}/>
            </li> 
          ))}
          </ul>

          <h3 ref={blockSauces} id="two" className={brgIngredientsStyles.ingredients__container__title}>Соусы</h3>
          <ul className={brgIngredientsStyles.ingredients__block} aria-labelledby="sauces">
          {data && data.map((block) => (
            block.type === "sauce" && <li key={block._id} onClick={() => {
              setIngred(false); 
              dispatch(getIngDetails(block));
              }}
            >
              <Ingredient image={block.image} text={block.name} price={block.price} item={block}/>
            </li> 
          ))}
          </ul>

          <h3 ref={blockMain} id="three" className={brgIngredientsStyles.ingredients__container__title}>Начинки</h3>
          <ul className={brgIngredientsStyles.ingredients__block}>
          {data && data.map((block) => (
            block.type === "main" && <li key={block._id} onClick={() => {
              setIngred(false);
              dispatch(getIngDetails(block)); 
              }}
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
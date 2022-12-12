import React, { useState, useEffect, useCallback } from "react";
import constructorStyles from "./constructor.module.css"
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import ConstructorModal from "../ConstructorModal/ConstructorModal";
import { apiUrl } from "../../utils/Api";
import { checkResult } from "../../utils/Api";
import { getOrderNumber, sumTotalPrice, addConstructElement, getBunElement, sortIngredients } from "../../services/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useDrop} from "react-dnd";
import Order from "../OrderDetails/Order";

const BurgerConstructor = () => {
  const dispatch = useDispatch()
  const idPost = useSelector(state => state.order.idPost)
  const burger = useSelector(state => state.getConstructor.construct)
  const price = useSelector(state => state.getConstructor.price)
  const data = useSelector(state => state.getRequest.data)
  const burgerElement = useSelector(state => state.getConstructor.constructBun)
  const sendDataConstruct = (ingredArrayId) => {
    return fetch(`${apiUrl}/orders`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: ingredArrayId
    })
  })
  .then(res => checkResult(res))
  .then(data => dispatch(getOrderNumber(data.order.number)))
  .catch((res) => console.log(res))
  }
  
  useEffect(() => {
    const findPrice = () => {
      dispatch(sumTotalPrice())
    } 
    findPrice()
  }, [burger, dispatch])

  const [construct, setConstruct] = useState(true)

    const [, drop] = useDrop({
      accept: "ingredElement",
      drop: (item) => {
        item.type === "bun"
        ? dispatch(getBunElement({ ...item}))
        : addBlock(item)
      }
    })

    const addBlock = (item) => {
      dispatch(addConstructElement(...data.filter(el => el._id === item._id)))
    }

    const moveIngredient = useCallback((dragIndex, hoverIndex) => {
      const dragItem = burger[dragIndex]
      if(dragItem) {
        const newArray = [...burger]
        newArray.splice(dragIndex, 1)
        newArray.splice(hoverIndex, 0, dragItem)
        dispatch(sortIngredients(newArray))
      }
    }, [burger, dispatch])

  return (  
    <section className={constructorStyles.constructor}>
      <h2 className={constructorStyles.constructor__title }>Состав вашего бургера</h2>
      <div className={constructorStyles.constructor__container} ref={drop}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {burgerElement.length !== 0 &&
              <Order 
              position={"top"} 
              locked={true} 
              name={burgerElement.name + "вверх"}
              image={burgerElement.image} 
              price={burgerElement.price} 
              key={burgerElement.id}
            />}
            {burger.map((detail, index) => (
              detail.type !== "bun" && 
              <Order 
                locked={false} 
                name={detail.name} 
                price={detail.price} 
                image={detail.image} 
                key={detail.id}
                index={index}
                idEl={detail.id}
                moveIngredient={moveIngredient}
                />
            ))}

              {burgerElement.length !== 0 &&
              <Order 
                position={"bottom"} 
                locked={true} 
                name={burgerElement.name + "низ"}
                image={burgerElement.image} 
                price={burgerElement.price} 
                key={burgerElement.id}
            />}
        </div>
      </div>
      <div className={constructorStyles.contstructor__block__bottom}>
        <div className={constructorStyles.contstructor__number__block}>
          <p className={constructorStyles.constructor__number}>{price}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button type="primary" size="medium" onClick={() => {setConstruct(false); sendDataConstruct(idPost)}}  htmlType="button">
          Нажми на меня
        </Button>
      </div>

      <Modal state={construct} setState={setConstruct}>
        <ConstructorModal/> 
      </Modal>
    </section>
  );
}

export default BurgerConstructor;

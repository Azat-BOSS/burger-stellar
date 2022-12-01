import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import Order from "../OrderDetails/Order";
import constructorStyles from "./constructor.module.css"
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import ConstructorModal from "../ConstructorModal/ConstructorModal";
import { apiUrl } from "../../utils/Api";
import { checkResult } from "../../utils/Api";

import { getOrderNumber, sumTotalPrice } from "../../services/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { addConstructElement } from "../../services/actions/action";
const BurgerConstructor = () => {
  const dispatch = useDispatch()
  const idPost = useSelector(state => state.order.idPost)
  const burger = useSelector(state => state.getConstructor.construct)
  const price = useSelector(state => state.getConstructor.price)
  const data = useSelector(state => state.getRequest.data)
  const [construct, setConstruct] = useState(true)
  console.log(idPost);
    const [, drop] = useDrop({
      accept: "ingredElement",
      drop: (item) => {
        addBlock(item)
      }
    })

    const addBlock = (id) => {
      dispatch(addConstructElement(...data.filter(el => el._id === id.id)))
    }


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

  return (  
    <section className={constructorStyles.constructor}>
      <h2 className={constructorStyles.constructor__title }>Состав вашего бургера</h2>
      <div className={constructorStyles.constructor__container} ref={drop}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {burger.map(detail => (detail.type === "bun" && <Order position={"top"} locked={true} name={detail.name} price={detail.price} image={detail.image} key={detail._id}/>))}

          {burger.map(detail => (
            detail.type === "main" && <Order locked={false} name={detail.name} price={detail.price} image={detail.image} key={detail._id} id={detail._id}/>
          ))} 

          {burger.map(detail => (
            detail.type === "sauce" && <Order locked={false} name={detail.name} price={detail.price} image={detail.image} key={detail._id} id={detail._id}/>
          ))}

          {burger.map(detail => (
            detail.type === "bun" && <Order position={"bottom"} locked={true} name={detail.name} price={detail.price} image={detail.image} key={detail._id}/>
          ))}
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

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    detail: PropTypes.number,
    _id: PropTypes.string,
  }))
}

export default BurgerConstructor;
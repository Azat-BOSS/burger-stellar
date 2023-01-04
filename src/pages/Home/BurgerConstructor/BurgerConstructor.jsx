import React, { useState, useEffect, useCallback } from "react";
import constructorStyles from "./constructor.module.css"
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../../components/Modal/Modal";
import ConstructorModal from "../ConstructorModal/ConstructorModal";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import Order from "../OrderDetails/Order";

import {
  getConstructorElements,
  getConstructorBuns,
  getTotalPrice,
  sortingConstructorElements
} from "../../../services/reducers/HomeReducers/burgerConstructor";
import {
  orderThunk,
  getIdPosts,
  getIdPostsBun,
  totalIdOrder
} from "../../../services/reducers/HomeReducers/orderThunk";
const BurgerConstructor = () => {

  const dispatch = useDispatch()
  const [construct, setConstruct] = useState(true)

  const data = useSelector(state => state.getIngredients.data.data)
  const constructorArr = useSelector(state => state.burgerConstructor.constructorArr)
  const price = useSelector(state => state.burgerConstructor.price)
  const idPost = useSelector(state => state.orderRequestSlice.idPostArr)
  const idBun = useSelector(state => state.orderRequestSlice.bunArr)
  const totalIdReq = useSelector(state => state.orderRequestSlice.totalArrOrder)
  let brgArr = useSelector(state => state.burgerConstructor.bunArr)
  console.log(constructorArr)
  const [, drop] = useDrop({
    accept: "ingredElement",
    drop: (item) => {
      if(item.type === "bun") {
        dispatch(getConstructorBuns({ ...item}))
        dispatch(getIdPostsBun(item._id))
      }
      else {
        dispatch(getConstructorElements(...data.filter(el => el._id === item._id)))
      }
    }
  })

  useEffect(() => {
    dispatch(getIdPosts(constructorArr))
    dispatch(getTotalPrice())
  }, [constructorArr, dispatch])
  const totalPrice = () => {
    let totalPrice = 0
    totalPrice = totalPrice + price
    if(isNaN(brgArr.price)) {
      brgArr = JSON.parse(JSON.stringify(brgArr));
      brgArr.price = 0
    }
    const bunsPrice = brgArr.price * 2
    return (totalPrice = totalPrice + bunsPrice)
  }

  const moveIngredient = useCallback((dragIndex, hoverIndex) => {
    const dragItem = constructorArr[dragIndex]
    if(dragItem) {
      const newArray = [...constructorArr]
      newArray.splice(dragIndex, 1)
      newArray.splice(hoverIndex, 0, dragItem)
      dispatch(sortingConstructorElements(newArray))
    }
  }, [constructorArr, dispatch])

  useEffect(() => {
    dispatch(totalIdOrder(idBun.concat(idPost)))
  }, [dispatch, idBun, idPost])

    return (
    <section className={constructorStyles.constructor}>
      <h2 className={constructorStyles.constructor__title }>Состав вашего бургера</h2>
      <div className={constructorStyles.constructor__container} ref={drop}>
        <div className={constructorStyles.constructor__block__elements}>
          {brgArr.length !== 0 &&
            <Order
              position={"top"}
              locked={true}
              name={brgArr.name + " (вверх)"}
              image={brgArr.image}
              price={brgArr.price}
              key={brgArr.id}
              _id={brgArr._id}
            />}
          {constructorArr && constructorArr.map((detail, index) => (
            detail.type !== "bun" &&
            <Order
              locked={false}
              name={detail.name}
              price={detail.price}
              image={detail.image}
              key={detail.id}
              index={index}
              idEl={detail.id}
              _id={detail._id}
              moveIngredient={moveIngredient}
            />
          ))}

          {brgArr.length !== 0 &&
            <Order
              position={"bottom"}
              locked={true}
              name={brgArr.name + " (низ)"}
              image={brgArr.image}
              price={brgArr.price}
              key={brgArr.id}
              _id={brgArr._id}
            />}
        </div>
      </div>
      <div className={constructorStyles.contstructor__block__bottom}>
        <div className={constructorStyles.contstructor__number__block}>
          <p className={constructorStyles.constructor__number}>{totalPrice()}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button type="primary" size="medium" onClick={() => {setConstruct(false); dispatch(orderThunk(totalIdReq))}}  htmlType="button">
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

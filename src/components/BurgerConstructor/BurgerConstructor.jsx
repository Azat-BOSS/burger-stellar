import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types"
import Order from "../OrderDetails/Order";
import constructorStyles from "./constructor.module.css"
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import ConstructorModal from "../ConstructorModal/ConstructorModal";
import { ConstructContext } from "../../services/appContext";
import { apiUrl } from "../../utils/Api";

const BurgerConstructor = () => {
  const { construct, setConstruct, burger, price, idPost, setPrice, setOrderNumber} = useContext(ConstructContext)

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
    .then(res => res.json())
    .then(data => setOrderNumber(data.order.number))
    }

  useEffect(() => {
    const findPrice = () => {
      const total = burger.reduce((prev, curr) => prev + curr.price, 0)
      setPrice(total)  
    } 
    findPrice()
  }, [burger, setPrice])

  return (  
    <section className={constructorStyles.constructor}>
      <h2 className={constructorStyles.constructor__title }>Состав вашего бургера</h2>
      <div className={constructorStyles.constructor__container}>
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
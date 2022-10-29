import React from "react";
import PropTypes from "prop-types"
import Order from "../OrderDetails/Order";
import constructorStyles from "./constructor.module.css"
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import ConstructorModal from "../ConstructorModal/ConstructorModal";

const BurgerConstructor = ({data, construct, setConstruct}) => {

  return (  
    <section className={constructorStyles.constructor}>
      <h2 className={constructorStyles.constructor__title }>Состав вашего бургера</h2>
      <div className={constructorStyles.constructor__container}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {data.map(detail => (
            detail.type === "bun" && <Order position={"top"} locked={true} name={detail.name} price={detail.price} image={detail.image} key={detail._id}/>
          ))}

          {data.map(detail => (
            detail.type === "main" && <Order locked={false} name={detail.name} price={detail.price} image={detail.image} key={detail._id}/>
          ))}

          {data.map(detail => (
            detail.type === "sauce" && <Order locked={false} name={detail.name} price={detail.price} image={detail.image} key={detail._id}/>
          ))}

          {data.map(detail => (
            detail.type === "bun" && <Order position={"bottom"} locked={true} name={detail.name} price={detail.price} image={detail.image} key={detail._id}/>
          ))}
        </div>
      </div>

      <div className={constructorStyles.contstructor__block__bottom}>
        <div className={constructorStyles.contstructor__number__block}>
          <p className={constructorStyles.constructor__number}>610</p>
          <CurrencyIcon type="primary"/>
        </div>
        <Button type="primary" size="medium" onClick={() => setConstruct(false)}>
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
    detail: PropTypes.number
  }))
}

export default BurgerConstructor;
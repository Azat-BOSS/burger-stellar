import React, { useState } from "react";
import headerStyles from "./appHeader.module.css"
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => { 
  const [clicked, setClicked] = useState("one")

  return ( 
    <header className={headerStyles.header}>

        <div className={headerStyles.header__buttons}>
          <button className={headerStyles.header__button} onClick={() => setClicked("one")}>
            <BurgerIcon type={clicked === "one" ? "primary" : "secondary"}/>Конструктор</button>
          <button className={headerStyles.header__button} onClick={() => setClicked("two")}>
            <ListIcon type={clicked === "two" ? "primary" : "secondary"} />Лента заказов</button>
        </div>
          <Logo />
        <button className={headerStyles.header__button} onClick={() => setClicked("three")}>
          <ProfileIcon type={clicked === "three" ? "primary" : "secondary"} />Личный кабинет</button>

    </header>
  );
}
 
export default AppHeader;
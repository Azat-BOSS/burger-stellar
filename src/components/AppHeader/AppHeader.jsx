import React, { useState } from "react";
import headerStyles from "./appHeader.module.css"
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => { 
  const [clicked, setClicked] = useState("one")

  return ( 
    <header className={headerStyles.header}>

        <div className={headerStyles.header__buttons}>
          <a href="/#" className="header__link">
            <button className={headerStyles.header__button} onClick={() => setClicked("one")}>
            <BurgerIcon type={clicked === "one" ? "primary" : "secondary"}/>Конструктор</button>
          </a>
          <a href="/#" className="header__link">
            <button className={headerStyles.header__button} onClick={() => setClicked("two")}>
            <ListIcon type={clicked === "two" ? "primary" : "secondary"} />Лента заказов</button>
          </a>
        </div>
          <Logo />
        <a href="/#" className="header__link">
          <button className={headerStyles.header__button} onClick={() => setClicked("three")}>
          <ProfileIcon type={clicked === "three" ? "primary" : "secondary"} />Личный кабинет</button>
        </a>

    </header>
  );
}
 
export default AppHeader;
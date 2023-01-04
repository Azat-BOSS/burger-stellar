import React from "react";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
const Home = () => {
  return ( 
    <>
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients/>
      <BurgerConstructor/>
    </DndProvider>
    </>
  );
}
 
export default Home;
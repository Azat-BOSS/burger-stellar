import React from 'react';
import appStyles from "./app.module.css"
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  return (
    <div className={appStyles.App}>
      <AppHeader/>
      <main className={appStyles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </main>
    </div>
  );
}

export default App;

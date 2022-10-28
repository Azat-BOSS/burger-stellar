import React, { useState, useEffect }  from 'react';
import appStyles from "./app.module.css"
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';


function App() {
  const apiUrl = "https://norma.nomoreparties.space/api/ingredients"
  const [data, setData] = useState([])
  
  useEffect(() => {
    const getInfo = () => {
      return fetch(`${apiUrl}`)
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch(() => Promise.reject("error"))
    }
    getInfo()
  }, [])
  return (

    <div className={appStyles.App}>
      <AppHeader/>
      <main className={appStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
    </div>
  );
}

export default App;

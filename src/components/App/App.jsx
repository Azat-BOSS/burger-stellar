import React, { useState, useEffect }  from 'react';
import appStyles from "./app.module.css"
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import {apiUrl} from "../../utils/Api"

function App() {
  const [data, setData] = useState([])
  const [ingred, setIngred] = useState(true)

  const checkResult = (res) => {
    if(res.ok) {
      return res.json
    }
    else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }

  useEffect(() => {
    const getInfo = () => {
      return fetch(apiUrl)
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch((res) => checkResult(res))
    }
    getInfo()
  }, [setData])
  
  return (
    <div className={appStyles.App}>
      <AppHeader/>
      <main className={appStyles.main}>
        <BurgerIngredients ingredData={data} state={ingred} setState={setIngred}/>
        <BurgerConstructor dataConstruct={data}/>
      </main>
    </div>
  );
}

export default App;

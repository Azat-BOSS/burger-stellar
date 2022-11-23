import React, { useState, useEffect }  from 'react';
import appStyles from "./app.module.css"
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { apiUrl, checkResult} from "../../utils/Api"
import { IngredientContext, ConstructContext} from "../../services/appContext.jsx"

function App() {
  const [data, setData] = useState([])
  const [ingred, setIngred] = useState(true)
  const [construct, setConstruct] = useState(true)
  const [price, setPrice] = useState(0)/* устанавливает цену */
  const [burger, setBurger] = useState([]) /* добавляет в конструктор при клике на ингредиент*/
  const [idPost, setIdPost] = useState([]) /* добавляет в пост запрос при клике на ингредиент */
  const [orderNumber, setOrderNumber] = useState() /* вставляет в мод.окно номер заказа */

  useEffect(() => {
    const getInfo = () => {
      return fetch(`${apiUrl}/ingredients`)
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch((res) => checkResult(res))
    }
    getInfo()
  }, [setData])

  const addElement = (item) => {
    setBurger([...burger, item])
  }

  const removeBurgerConstruct = (id) => {
    setBurger(burger.filter((state) => state._id !== id))
  }

  const addIdPost = (id) => {
    setIdPost(idPost.concat(id))
  }

  return (
    <div className={appStyles.App}>
      <AppHeader/>
      <main className={appStyles.main}>
        <IngredientContext.Provider value={{
            ingred, 
            setIngred, 
            addElement, 
            addIdPost, 
            data
          }}>
          <BurgerIngredients/>
        </IngredientContext.Provider>
        <ConstructContext.Provider value={{
            construct, 
            setConstruct, 
            burger, 
            price, 
            idPost, 
            setPrice, 
            removeBurgerConstruct,
            orderNumber,
            setOrderNumber
          }}>
          <BurgerConstructor/>
        </ConstructContext.Provider>
      </main>
    </div>
  );
}

export default App;

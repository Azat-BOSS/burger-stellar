import { configureStore, combineReducers } from "@reduxjs/toolkit";

import getIngredients from "./reducers/HomeReducers/getIngredients.js";
import ingredientDetails from "./reducers/HomeReducers/ingredientDetails.js";
import burgerConstructor from "./reducers/HomeReducers/burgerConstructor.js";
import orderRequestSlice from "./reducers/HomeReducers/orderThunk.js"

const rootReducer = combineReducers({
  getIngredients: getIngredients,
  ingredientDetails: ingredientDetails,
  burgerConstructor: burgerConstructor,
  orderRequestSlice: orderRequestSlice
})

export const store = configureStore({
  reducer: rootReducer
})

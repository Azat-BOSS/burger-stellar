import { apiUrl, checkResult } from "../../utils/Api"
import { 
  GET_INGREDIENTS_SUCCESS, 
  GET_CONSTRUCT_SUCCESS, 
  REMOVE_CONSTRUCT_ELEMENT,
  GET_INGREDIENT_DETAILS,
  GET_ID_INGREDIENT,
  GET_ORDER_NUMBER,
  GET_TOTAL_PRICE,
  GET_BUN_CONSTRUCTOR,
  SORT_INGREDIENTS
} from "../constants/constants.js";


export const getInfo = () => {
  return function(dispatch) {
    fetch(`${apiUrl}/ingredients`)
      .then(res => checkResult(res))
      .then(res => dispatch(
        getDataIngredients(res.data, )
      ))
      .catch(res => console.log(res))
  }
}

export const getDataIngredients = (payload) => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    payload
  }
}

export const addConstructElement = (payload) => {
  return {
    type: GET_CONSTRUCT_SUCCESS,
    payload
  }
}

export const removeConstructElement = (payload) => {
  return {
    type: REMOVE_CONSTRUCT_ELEMENT,
    payload,
  }
}

export const getIngredDataElement = (payload) => {
  return {
    type: GET_INGREDIENT_DETAILS,
    payload
  }
}

export const getIdIngred = (payload) => {
  return {
    type: GET_ID_INGREDIENT,
    payload
  }
}

export const getOrderNumber = (payload) => {
  return {
    type: GET_ORDER_NUMBER,
    payload
  }
}

export const sumTotalPrice = (payload) => {
  return {
    type: GET_TOTAL_PRICE,
    payload
  }
}

export const getBunElement = (payload) => {
  return {
    type: GET_BUN_CONSTRUCTOR,
    payload
  }
}

export const sortIngredients = (payload) => {
  return {
    type: SORT_INGREDIENTS,
    payload
  }
}

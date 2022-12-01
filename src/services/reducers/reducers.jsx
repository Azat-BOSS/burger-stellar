import { combineReducers } from "redux";
import { 
  GET_INGREDIENTS_SUCCESS, 
  GET_CONSTRUCT_SUCCESS, 
  REMOVE_CONSTRUCT_ELEMENT,
  GET_INGREDIENT_DETAILS,
  GET_ID_INGREDIENT,
  GET_ORDER_NUMBER,
  GET_TOTAL_PRICE
} from "../constants/constants.js";

const ingredientsDefault = {
  data: []
}

const constructDefault = {
  construct: [],
  price: 0
}

const ingredDetailsDefault = {
  ingredData: {}
}

const orderDefault = {
  idPost: [],
  orderNumber: 0
}

const getIngredients = (state = ingredientsDefault, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state, 
        data: action.data
      }
    default:
      return state
  }
}

const getConstructorEl = (state = constructDefault, action) => {
  switch (action.type) {
    case GET_CONSTRUCT_SUCCESS:
      return {
        ...state,
        construct: [...state.construct, action.payload]
      }
    case REMOVE_CONSTRUCT_ELEMENT: 
      return {
        ...state,
        construct: state.construct.filter(el => el._id !== action.payload)
      }
    case GET_TOTAL_PRICE:
      return {
        ...state,
        price: state.construct.reduce((prev, curr) => curr.type === "bun" ? prev + (curr.price * 2) : prev + curr.price, 0)
      }
    default:
      return state
    }
}

const viewedIngredient = (state = ingredDetailsDefault, action) => {
  switch (action.type) {
    case GET_INGREDIENT_DETAILS:
      return {
        ...state,
        ingredData: action.payload
      }
    default:
      return state
  }
}

const completedOrder = (state = orderDefault, action) => {
  switch(action.type) {
    case GET_ID_INGREDIENT:
      return {
        ...state,
        idPost: [...state.idPost, action.payload]
      }
    case GET_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: action.payload
      }
    }
    default: {
      return state
    }
  }
}


export const rootReducer = combineReducers({
  getRequest: getIngredients,
  getConstructor: getConstructorEl,
  ingredDetails: viewedIngredient,
  order: completedOrder
})
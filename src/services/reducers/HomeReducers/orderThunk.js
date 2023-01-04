import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../../../utils/Api";

export const orderThunk = createAsyncThunk(
  "data/orderThunk",
  (ingredArrayId) => {
    return fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ingredients: ingredArrayId
      })
    })
    .then(res => res.json())
  }
)

const orderRequestSlice = createSlice({
  name: "orderRequestSlice",
  initialState: {
    idPostArr: [],
    bunArr: [],
    totalArrOrder: [],
    order: 0,
    error: null,
    resolve: null
  },
  reducers: {
    getIdPosts: (state, action) => {
      state.idPostArr = action.payload.map(el => el._id)
    },
    getIdPostsBun: (state, action) => {
      state.bunArr = [action.payload]
    },
    removeIdPost: (state, action) => {
      state.idPostArr = state.idPostArr.filter(el => el !== action.payload)
    },
    totalIdOrder: (state, action) => {
      state.totalArrOrder = action.payload
    }
  },
  extraReducers: {
    [orderThunk.pending]: (state) => {
      state.error = null
      state.resolve = "pending ..."
    },
    [orderThunk.fulfilled]: (state, action) => {
      state.order = action.payload.order.number
      state.resolve = "success"
      state.error = null
    },
    [orderThunk.rejected]: (state, action) => {
      state.error = "rejected ..."
      state.resolve = null
    }
  }
})

export const {
  finalIdenNum,
  getIdPosts,
  removeIdPost,
  getIdPostsBun,
  totalIdOrder
 } = orderRequestSlice.actions
export default orderRequestSlice.reducer

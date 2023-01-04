import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../../utils/Api";

export const getDataIngredients = createAsyncThunk(
  "data/getDataIngredients",
  () => {
    return fetch(`${apiUrl}/ingredients`)
    .then(res => res.json())
    .catch(err => console.log(err))
  }
)

const getIngredients = createSlice({
  name: "getIngredients",
  initialState: {
    data: [],
    error: null,
    pending: null
  },
  extraReducers: {
    [getDataIngredients.pending]: (state) => {
      state.error = null
      state.pending = "pending ..."
    },
    [getDataIngredients.fulfilled]: (state, action) => {
      state.error = null
      state.pending = "resolve"
      state.data = action.payload
    },
    [getDataIngredients.rejected]: (state) => {
      state.error = "null"
      state.pending = null
    },
  }
})

export default getIngredients.reducer
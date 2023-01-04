import { createSlice } from "@reduxjs/toolkit";

const ingredientDetails = createSlice({
  name: "ingredientDetails",
  initialState: {
    detailsArr: []
  },
  reducers: {
    getIngDetails: (state, action) => {
      state.detailsArr = action.payload
    }
  }
})

export const { getIngDetails } = ingredientDetails.actions
export default ingredientDetails.reducer

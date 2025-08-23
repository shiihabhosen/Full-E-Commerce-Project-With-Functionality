import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: null,
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    ProductReducer: (state, action) => {
      state.product = action.payload;
    },
    filterReducer: (state, action) => {
      state.product = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { ProductReducer,filterReducer} = ProductSlice.actions

export default ProductSlice.reducer
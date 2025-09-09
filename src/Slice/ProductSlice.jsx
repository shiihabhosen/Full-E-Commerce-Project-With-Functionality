import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  product: null,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
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
    addtocardReducer: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if(index === -1){
        state.cart = [...state.cart, action.payload];
        localStorage.setItem('cart', JSON.stringify([...state.cart])); 
      }else{
        console.log(
          "data to acei "
        );
        
      }
      
    },
    deleterReducer: (state, action) => {
      state.cart.splice(action.payload.id, 1)
      localStorage.setItem('cart', JSON.stringify([...state.cart])); 
    },
  },
})

// Action creators are generated for each case reducer function
export const { ProductReducer, filterReducer, addtocardReducer,deleterReducer} = ProductSlice.actions

export default ProductSlice.reducer
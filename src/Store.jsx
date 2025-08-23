import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Slice/ProductSlice' // default export ইম্পোর্ট

export const store = configureStore({
  reducer: {
    product: productReducer, // এখানে যেকোনো key দিতে পারো, সেটা state এর নাম হবে
  },
})

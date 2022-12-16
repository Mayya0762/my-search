import { configureStore } from '@reduxjs/toolkit'
import shoes from './shoesSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        shoes,
        cart
    },
  })
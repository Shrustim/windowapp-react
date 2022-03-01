import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import booksReducer from './features/booksSlice'
export const store = configureStore({
  reducer: {
     counter: counterReducer,
     book:booksReducer
  },
})
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import booksReducer from './features/booksSlice';
import studentReducer from "./reducers/studentReducer";
import loginSlice from "./features/loginSlice";
export const store = configureStore({
  reducer: {
     counter: counterReducer,
     book:booksReducer,
     students:studentReducer,
     login:loginSlice
  },
})
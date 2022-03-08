import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import booksReducer from './features/booksSlice';
import studentReducer from "./reducers/studentReducer";
import loginSlice from "./features/loginSlice";
import { pokemonApi } from './services/pokeRTK';
export const store = configureStore({
  reducer: {
     counter: counterReducer,
     book:booksReducer,
     students:studentReducer,
     login:loginSlice,
     // Add the generated reducer as a specific top-level slice
     [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})
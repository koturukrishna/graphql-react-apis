import { configureStore } from "@reduxjs/toolkit";
import apiCallingReducer from "./components/redux/apiCallingSlice";
import { pokemonApi } from "./components/redux/pokemon.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: apiCallingReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

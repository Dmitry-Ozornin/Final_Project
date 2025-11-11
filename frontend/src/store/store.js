import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";

const store = configureStore({
  reducer: {
    data: productsReducer,
  },
});

export default store;

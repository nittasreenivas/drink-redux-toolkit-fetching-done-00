import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "./features/Drinks/drinkSlice";
const store = configureStore({
  reducer: {
    drink: drinkReducer
  }
});

export default store;

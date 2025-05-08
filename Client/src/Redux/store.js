import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlice";
import UserReducer from "./userSlice";

const store = configureStore({
  reducer: { TodoReducer, UserReducer },
});

export default store;

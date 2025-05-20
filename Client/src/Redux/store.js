import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlice";
import UserReducer from "./userSlice";
import AuthReducer from "./authSlice";

const store = configureStore({
  reducer: { TodoReducer, UserReducer, AuthReducer },
});

export default store;

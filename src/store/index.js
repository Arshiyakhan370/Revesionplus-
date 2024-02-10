
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UseListSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;

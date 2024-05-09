
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UseListSlice";
import { CategoryApi } from "../Services/CategoryApi";

const store = configureStore({
  reducer: {
    users: userReducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CategoryApi.middleware),
});



export default store;

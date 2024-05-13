import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UseListSlice";
import { CategoryApi } from "../Services/CategoryApi";
import { UserTeacherDataListApi } from "../Services/UserTeacherDataListApi";

const store = configureStore({
  reducer: {
    users: userReducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [UserTeacherDataListApi.reducerPath]: UserTeacherDataListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CategoryApi.middleware, UserTeacherDataListApi.middleware),
});

export default store;

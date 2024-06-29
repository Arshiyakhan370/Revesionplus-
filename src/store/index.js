import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UseListSlice";
import { UserTeacherDataListApi } from "../Services/UserTeacherDataListApi";
import { CategoryApi } from "../Services/CategoryMasterApi/CategoryApi";

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

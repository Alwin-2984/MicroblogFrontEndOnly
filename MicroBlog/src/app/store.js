import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../reducers/postSlice";
import loginTabSlice from "../reducers/loginTabSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    login: loginTabSlice,
  },
});

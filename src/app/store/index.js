import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../helpers/postsSlice";
import usersReducer from "../helpers/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

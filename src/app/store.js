import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../utils/postsSlice";
import usersReducer from "../utils/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

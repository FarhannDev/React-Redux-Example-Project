import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../helpers/postsSlice";
import usersReducer from "../helpers/usersSlice";
import commentsReducer from "../helpers/commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});

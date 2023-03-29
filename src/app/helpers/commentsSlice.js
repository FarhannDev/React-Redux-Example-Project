import { createSlice } from "@reduxjs/toolkit";
import { fetchComments, addNewComments } from "../services/commentsApi";
const initialState = [];
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addNewComments.fulfilled, (state, action) => {
        const sortedComments = state.comments.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        action.payload.id = sortedComments[sortedComments.length - 1].id + 1;
        action.payload.createdAt = new Date().toISOString();
        action.payload.updatedAt = new Date().toISOString();

        state.comments.push(action.payload);
      });
  },
});

export const selectAllComments = (state) => state.comments;
export default commentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../features/api/customUsersApi";

const initialState = [];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, userId) => {
  return state.users.find((user) => user.id === userId);
};
export default usersSlice.reducer;

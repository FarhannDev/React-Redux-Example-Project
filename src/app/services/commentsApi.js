import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../constants/axios";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await axios.get("/comments");
    return response.data;
  }
);

export const addNewComments = createAsyncThunk(
  "comments/addNewComments",
  async (initialComment) => {
    try {
      const response = await axios.post(`/comments`, initialComment);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

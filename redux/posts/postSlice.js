import { createSlice } from "@reduxjs/toolkit";
import { createPostThunk } from "./postThunk";

const initialState = {
  isLoading: false,
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.posts = [...state.posts, action.payload];
        state.posts.push({...action.payload, postId: new Date().toISOString()})
        state.isLoading = false;
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const postReducer = postSlice.reducer

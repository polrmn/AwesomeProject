import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: {},
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const { postId, commentId, commentData } = action.payload;

      const post = state.comments[postId];

      if (post) {
        post[commentId] = commentData;
      } else {
        state.comments[postId] = { [commentId]: commentData };
      }
    },
  },
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;

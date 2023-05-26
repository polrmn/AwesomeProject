import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./authThunk";

const initialState = {
  userId: null,
  name: null,
  email: null,
  token: null,
  userAvatar: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    uploadUserData(state, action) {
      console.log(action.payload);
      state.userAvatar = action.payload.avatar;
      state.name = action.payload.name
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        state.email = action.payload.email
        state.userId = action.payload.userId
        state.token = action.payload.idToken
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload;
      });
  },
});

export const { uploadUserData } = authSlice.actions;

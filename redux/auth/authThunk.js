import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, storage } from "../../config";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ email, password, name, avatar }, thunkAPI) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: avatar,
      });
      return data._tokenResponse;
    } catch (error) {
      console.log("errror", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user.stsTokenManager.accessToken);
      return credentials.user.stsTokenManager.accessToken;
    } catch (error) {
      console.log("errror", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

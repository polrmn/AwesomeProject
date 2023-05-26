import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../../config";
import { uploadBytes, ref } from "firebase/storage";

export const createPostThunk = createAsyncThunk(
  "post/createPost",
  async ({ title, location, photo }, { rejectWithValue }) => {
    try {
      const storageRef = ref(storage, `post-photos/${photo.name}`);
      await uploadBytes(storageRef, photo);

      const postData = {
        title,
        location,
        photoURL: `https://storage.googleapis.com/${storageRef.bucket}/${storageRef.fullPath}`,
        timestamp: new Date().toString(),
      };

      const docRef = await addDoc(collection(db, "posts"), postData);
      console.log("Post created with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding post: ", error);
      return rejectWithValue(error.message);
    }
  }
);

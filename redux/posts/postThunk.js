import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../../config";
import { uploadBytes, ref } from "firebase/storage";

export const createPostThunk = createAsyncThunk(
  "post/createPost",
  async ({ title, location, photo }, { rejectWithValue }) => {
    try {
      console.log(photo);
      const storageRef = ref(storage, `post-photos/${photo.uri.slice(36)}`);
      await uploadBytes(storageRef, await fetch(photo.uri));


      const postData = {
        title,
        location,
        photoURL: `https://storage.googleapis.com/${storageRef.bucket}/${storageRef.fullPath}`,
        timestamp: new Date().toString(),
      };

      const docRef = await addDoc(collection(db, "posts"), postData);
      console.log("Post created with ID: ", docRef.id);
      // return docRef.id;
      return { title, location, photo };
    } catch (error) {
      console.error("Error adding post: ", error);
      return rejectWithValue(error.message);
    }
    finally {
      return { title, location, photo };
    }
  }
);

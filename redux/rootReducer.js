import {combineReducer} from '@reduxjs/toolkit' 
import authReducer from "./auth/authSlice";
import postReducer from "./posts/postSlice";

const rootReducer = combineReducer({
  auth: authReducer,
  post: postReducer,
});

export default rootReducer;

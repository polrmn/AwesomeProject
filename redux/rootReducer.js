import {combineReducer} from '@reduxjs/toolkit' 
import authReducer from "./auth/authSlice";

const rootReducer = combineReducer({
  auth: authReducer,
});

export default rootReducer;

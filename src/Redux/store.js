import { configureStore } from "@reduxjs/toolkit";
import requestSlice from "./requestSlice";

export default configureStore({
  reducer: {
    request: requestSlice,
  },
});
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    counterSlice,
    authSlice,
  },
});

export default store;

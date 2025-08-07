import { configureStore } from "@reduxjs/toolkit"

import SmokerSlice from "./slices/SmokerSlice";

const store = configureStore({
  reducer: {
    smoker: SmokerSlice,
  },
});

export default store;
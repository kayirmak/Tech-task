import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { profileApi } from "../../features/profile/api";

export const store = configureStore({
  reducer: {
    [profileApi.reducerPath]: profileApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
});

setupListeners(store.dispatch);

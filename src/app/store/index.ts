import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { profileApi } from "../../features/profile/api";
import searchUserReducer from "../../widgets/header/api/searchSlice";

const rootReducer = combineReducers({
  searchUser: searchUserReducer,
  [profileApi.reducerPath]: profileApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
});

setupListeners(store.dispatch);

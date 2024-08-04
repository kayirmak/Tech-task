import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { profileApi } from "../../features/profile/api";
import searchUserReducer from "../../widgets/header/api/searchSlice";
import { reposListApi } from "../../features/repositories-list/api";

const rootReducer = combineReducers({
  searchUser: searchUserReducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [reposListApi.reducerPath]: reposListApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      profileApi.middleware,
      reposListApi.middleware
    ),
});

setupListeners(store.dispatch);

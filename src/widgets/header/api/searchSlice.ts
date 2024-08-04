import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchUserState } from "../../../shared/store/types";
import { GitHubUser } from "../../../shared/api/types";

const initialState: ISearchUserState = {
  searchUser: "",
  isLoading: false,
  user: null,
  isError: null,
};

export const searchUserSlice = createSlice({
  name: "search_user",
  initialState,
  reducers: {
    searchUserTerm: (state, action: PayloadAction<string>) => {
      state.searchUser = action.payload;
    },

    getSearchUserStart: (state) => {
      state.isLoading = true;
    },

    getSearchUserSuccess: (state, action: PayloadAction<GitHubUser>) => {
      state.user = action.payload;
      state.isError = null;
      state.isLoading = false;
    },

    getSearchUserFailure: (state, action: PayloadAction<boolean>) => {
      state.user = null;
      state.isError = action.payload;
      state.isLoading = false;
    },

    clearFields: (state) => {
      state.user = null;
      state.isError = null;
    },
  },
});

export const {
  searchUserTerm,
  getSearchUserStart,
  getSearchUserSuccess,
  getSearchUserFailure,
  clearFields,
} = searchUserSlice.actions;
export default searchUserSlice.reducer;

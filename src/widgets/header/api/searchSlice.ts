import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchUserState } from "../../../shared/store/types";
import { GitHubUser } from "../../../shared/api/types";

const initialState: ISearchUserState = {
  searchUser: "",
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

    setUser: (state, action: PayloadAction<GitHubUser>) => {
      state.user = action.payload;
      state.isError = null;
    },

    setUserError: (state, action: PayloadAction<boolean>) => {
      state.user = null;
      state.isError = action.payload;
    },

    clearFields: (state) => {
      state.user = null;
      state.isError = null;
    },
  },
});

export const { searchUserTerm, setUser, setUserError, clearFields } =
  searchUserSlice.actions;
export default searchUserSlice.reducer;

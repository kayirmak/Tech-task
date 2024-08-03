import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISearchUserState } from "../../../shared/store/types";

const initialState: ISearchUserState = {
  user: null,
  isError: null,
};

export const searchUserSlice = createSlice({
  name: "search_user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
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

export const { setUser, setUserError, clearFields } = searchUserSlice.actions;
export default searchUserSlice.reducer;

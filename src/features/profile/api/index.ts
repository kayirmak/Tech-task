import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/api/baseQuery";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery,
  endpoints: (builder) => ({
    getProfileByUsername: builder.query({
      query: (username) => `users/${username}`,
    }),
  }),
  keepUnusedDataFor: 0,
});

export const { useLazyGetProfileByUsernameQuery } = profileApi;

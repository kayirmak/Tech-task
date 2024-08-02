import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../shared/api/baseUrl";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProfileByUsername: builder.query({
      query: (username) => `users/${username}`,
    }),
  }),
});

export const { useLazyGetProfileByUsernameQuery } = profileApi;

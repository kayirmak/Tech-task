import { createApi } from "@reduxjs/toolkit/query/react";
import { IGetReposList } from "../types";
import { baseQuery } from "../../../shared/api/baseQuery";

export const reposListApi = createApi({
  reducerPath: "reposListApi",
  baseQuery,
  endpoints: (builder) => ({
    getReposList: builder.query({
      query: ({ username, currentPage, perPage }: IGetReposList) =>
        `users/${username}/repos?page=${currentPage}&per_page=${perPage}`,
    }),
  }),
  keepUnusedDataFor: 0,
});

export const { useLazyGetReposListQuery } = reposListApi;

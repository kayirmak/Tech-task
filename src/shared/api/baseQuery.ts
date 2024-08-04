import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "./baseUrl";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

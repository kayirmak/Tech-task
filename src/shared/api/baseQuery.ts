import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "./baseUrl";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = "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";
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

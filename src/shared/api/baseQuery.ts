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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  endpoints: (builders) => ({
    getSummary: builders.query({
      query: (params) => "test",
    }),
  }),
});

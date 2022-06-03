import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const quoteApiHeaders = {
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_QUOTE_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: quoteApiHeaders });

export const quoteApi = createApi({
  reducerPath: 'quoteApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_QUOTE_API_URL }),
  endpoints: (builder) => ({
    getQuote: builder.query({
      query: () => createRequest(``),
    }),
  }),
});

export const { useGetQuoteQuery} = quoteApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProducts: builder.query({
      query: (productId) => `/product/${productId}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comments/${id}`,
        method: `POST`,
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  usePostCommentMutation,
} = api;

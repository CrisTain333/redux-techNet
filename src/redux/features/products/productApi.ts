import { api } from '@/redux/api/apiSlice';

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProducts: builder.query({
      query: (productId) => `/product/${productId}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),
    getComments: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comment'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetProductsQuery,
  useGetSingleProductsQuery,
  usePostCommentMutation,
} = productApi;

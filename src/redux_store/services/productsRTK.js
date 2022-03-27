// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://temp-app-windowshop.herokuapp.com/' }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ['Product'],
    }),
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation({
      query: ({ id, ...productData }) => ({
        url: 'products',
        method: 'POST',
        body: productData,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...productData }) => ({
        url: `products/${id}`,
        method: 'PATCH',
        body: productData,
      }),
      invalidatesTags: ['Product'],
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
              useGetProductByIdQuery, 
              useGetProductsQuery,
              useAddProductMutation,
              useUpdateProductMutation,
              useRemoveProductMutation 
            } = productApi
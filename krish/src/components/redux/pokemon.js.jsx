// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ``,
    }),
    getSpecificCategoryProducts: builder.query({
      query: (name) => `category/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetSpecificCategoryProductsQuery } =
  pokemonApi;

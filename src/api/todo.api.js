// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `/todos`,
    }),
    getTodo: builder.query({
      query: (id) => `/todos/${id}`,
    }),
    createTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos`,
        method: "POST",
        body: todo
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useCreateTodoMutation
} = todoApi
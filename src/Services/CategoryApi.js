import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CategoryApi = createApi({
  reducerPath: 'CategoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://staging.ibgakiosk.com/api/' }),
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: () => `category_list/`,
    }),
    getViewSubjectList: builder.query({
      query: () => `view_subject`,
    }),
    updateSubject: builder.mutation({
      query: ({ id, subjectName }) => ({
        url: `update_subject/${id}`,
        method: 'POST',
        body: { subject_name: subjectName },
      }),
    }),
    deleteSubject: builder.mutation({
      query: (id) => ({
        url: `delete_subject/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})
 

export const { useGetCategoryListQuery, useGetViewSubjectListQuery, useUpdateSubjectMutation, useDeleteSubjectMutation } = CategoryApi

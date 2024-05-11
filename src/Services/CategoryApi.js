import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CategoryApi = createApi({
  reducerPath: 'CategoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://staging.ibgakiosk.com/api/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: () => `category_list/`,
    }),
    getViewSubjectList: builder.query({
      query: () => `view_subject`,
    }),
    updateSubject: builder.mutation({
      query: (selectedTeacher,subjectName) => ({
        url: `update_subject`,
        method: 'POST',
        body:  {
          subject_id: selectedTeacher.subject_id,
          boardID: selectedTeacher.boardID,
          subejctName: subjectName
          ,
   
        },
      }),
      invalidatesTags: ['Post'],
    }),
    deleteSubject: builder.mutation({
      query: (subject_id) => ({
        url: `delete_subject`,
        method: 'POST',
        body:{subject_id}
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})
 

export const { useGetCategoryListQuery, useGetViewSubjectListQuery, useUpdateSubjectMutation, useDeleteSubjectMutation } = CategoryApi
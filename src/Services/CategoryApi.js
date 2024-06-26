import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CategoryApi = createApi({
  reducerPath: 'CategoryApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://staging.ibgakiosk.com/api/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://13.235.206.253/api/v1/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: () => `categorys/allcategory`,
    }),
    getViewSubjectList: builder.query({
      query: () => `categorys/subject`,
      providesTags: ['Post'],
    }),
  //  getViewSubjectLevelList: builder.query({
  //  query: () => `categorys/subjectlevel`,
  //  providesTags: ['Post'],
  //  }),
    updateSubject: builder.mutation({
    
      query: ({selectedTeacher,subjectName}) => ({
        url: `categorys/subject/`,
        method: 'PATCH',
        
        body:  {
          subject_id: selectedTeacher.subject_id,
          board_id: selectedTeacher.boardID,
          subejctName: subjectName,
          
        },
      }),
      invalidatesTags: ['Post'],
    }),
    saveSubject: builder.mutation({
      query: ({selectedBoard,subjectName}) => ({
        url: `categorys/subject/create`, 
        method: 'POST',
        body:  {
          "board_id":selectedBoard,
        "subject_name":subjectName,
       }, 
      }),
      invalidatesTags: ['Post'],
    }),
    deleteSubject: builder.mutation({
      query: (_id) => ({
        url: `categorys/subject`,
        method: 'DELETE',
        body:{_id}
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})
 

export const { useGetCategoryListQuery, useGetViewSubjectListQuery,useGetViewSubjectLevelListQuery, useUpdateSubjectMutation, useDeleteSubjectMutation,useSaveSubjectMutation } = CategoryApi

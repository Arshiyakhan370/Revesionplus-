import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CategoryApi = createApi({
  reducerPath: 'CategoryApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://staging.ibgakiosk.com/api/' }),
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: () => `categorys/allcategory`,
    }),
    getViewSubjectList: builder.query({
      query: () => `categorys/subject`,
      providesTags: ['Post'],
    }),
  
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
      query: (deleteId) => ({
        url: `categorys/subject`,
        method: 'DELETE',
        body:{deleteId}
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})
 

export const { useGetCategoryListQuery, useGetViewSubjectListQuery,useGetViewSubjectLevelListQuery, useUpdateSubjectMutation, useDeleteSubjectMutation,useSaveSubjectMutation } = CategoryApi

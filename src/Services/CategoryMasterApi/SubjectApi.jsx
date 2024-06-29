
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const SubjectApi = createApi({
  reducerPath: 'SubjectApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getViewSubjectList: builder.query({
      query: () => `categorys/subject`,
      providesTags: ['Post'],
    }),

    updateSubject: builder.mutation({
      query: ({ selectedTeacher, subjectName }) => ({
        url: `categorys/subject/`,
        method: 'PATCH',
        body: {
          subject_id: selectedTeacher.subject_id,
          board_id: selectedTeacher.boardID,
          subjectName: subjectName,
        },
      }),
      invalidatesTags: ['Post'],
    }),

    saveSubjectLevel: builder.mutation({
      query: ({  selectedBoard,selectedSubject,subjectLevelName}) => ({
        url: `/categorys/subjectlevel/create`,
        method: 'POST',
        body: {
            board_id: selectedBoard,
            subject_id: selectedSubject,
            subject_level_name: subjectLevelName,
        },
      }),
      invalidatesTags: ['Post'],
    }),

    // deleteSubject: builder.mutation({
    //   query: (deleteId) => ({
    //     url: `categorys/subject`,
    //     method: 'DELETE',
    //     body: { deleteId },
    //   }),
    //   invalidatesTags: ['Post'],
    // }),
  }),
});

export const {
  useGetViewSubjectListQuery,
  useUpdateSubjectMutation,
  useSaveSubjectLevelMutation
} = SubjectApi;

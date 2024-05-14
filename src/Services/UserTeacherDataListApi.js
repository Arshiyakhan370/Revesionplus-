import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserTeacherDataListApi = createApi({
  reducerPath: "UserTeacherDataListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://staging.ibgakiosk.com/api/" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getTeacherDataList: builder.query({
      query: () => `view_user`,
      providesTags: ["user"],
    }),
    getProfileDataList: builder.query({
      query: (id) => `profile_view/${id}`,
      providesTags: ["user"],
    }),
    addTeacherData: builder.mutation({
        query: (formData) => ({
          url: 'add_user',
          method: 'POST',
          body: formData,
        }),
      invalidatesTags: ["user"],
    }),
    updateTeacher: builder.mutation({
      query: ({
        id,
        action='update',
        name,
        email,
       role,
        mobile,
        expire_date,
      }) => ({
        url: `add_user`,
        method: "POST",
        body: {
          action,
          user_id:id,
          name,
          email,
          usertype:role,
          mobile,
          expire_date,
        },
      }),
      invalidatesTags: ["user"],
    }),
    deleteTeacher: builder.mutation({
      query: (user_id) => ({
        url: `delete_user`,
        method: "POST",
        body: { user_id },
      }),
      invalidatesTags: ["user"],
    }),
    updatePassword: builder.mutation({
      query: (passwordData) => ({
        url: `update_auth`,
        method: "POST",
        body: passwordData,
      }),
      invalidatesTags: ["user"],
    }),
    getUserProfile: builder.query({
      query: (user_id) => `profile_view/${user_id}`,
    }),
  }),
});

export const {
  useGetTeacherDataListQuery,
  useDeleteTeacherMutation,
  useUpdateTeacherMutation,
  useAddTeacherDataMutation,
  useUpdatePasswordMutation,
  useGetUserProfileQuery,
  useGetProfileDataListQuery,
} = UserTeacherDataListApi;

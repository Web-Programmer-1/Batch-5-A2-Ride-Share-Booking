
type MeResponse = { user: { _id: string; name: string; email: string; phone?: string; role: string } };

// userApiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ride-booking-api.vercel.app/api/v1/user",
    
    credentials: "include", 
  }),

  tagTypes:["user"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({ url: "/register", method: "POST", body: data }),
      invalidatesTags:["user"],
    }),
    login: builder.mutation({
      query: (data) => ({ url: "/login", method: "POST", body: data }),
      invalidatesTags:["user"],
    }),
    logout: builder.mutation({
      query: () => ({ url: "/logout", method: "POST" }),
      invalidatesTags:["user"],
    }),
    getMe: builder.query<MeResponse, void>({
      query: () => ({ url: "/me", method: "GET" }),
      providesTags:["user"],
    }),

    // Profile Updated Mutation

    updateProfile: builder.mutation<
      { success: boolean; message: string; data: any },
      { name?: string; phone?: string; password?: string }
    >({
      query: (body) => ({
        url: "/profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags:["user"]
    }),


  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetMeQuery,
  useUpdateProfileMutation,
} = userApi;





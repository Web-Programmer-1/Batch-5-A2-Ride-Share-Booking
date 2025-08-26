
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl:"https://ride-booking-api.vercel.app/api/v1/ride" ,
    credentials: "include", 
  }),
  tagTypes: ["Users"],

  endpoints: (builder) => ({


    getAllUsers: builder.query<any, { search?: string; role?: string }>({
  query: ({ search, role }) => {
    let params = new URLSearchParams();
    if (search) params.append("search", search);
    if (role) params.append("role", role);
    return {
      url: `/users?${params.toString()}`,
      method: "GET",
    };
  },
  providesTags: ["Users"],
}),




    blockUser: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/users/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),

    approveDriver: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/drivers/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),


    // RideSightDetails 


     getRideOversight: builder.query<any, { status?: string; driver?: string; rider?: string; from?: string; to?: string }>({
      query: ({ status, driver, rider, from, to }) => {
        let params = new URLSearchParams();
        if (status) params.append("status", status);
        if (driver) params.append("driver", driver);
        if (rider) params.append("rider", rider);
        if (from) params.append("from", from);
        if (to) params.append("to", to);

        return { url: `/oversight?${params.toString()}`, method: "GET" };
      },
    }),


    // Anylatices dashboard desgin 


     getAnalytics: builder.query<any, void>({
      query: () => "/analytics",
    }),


    // Ride Over Sight Filters 

      getRideOversightFilter: builder.query<any, { status?: string; from?: string; to?: string; search?: string }>({
      query: ({ status, from, to, search }) => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        if (from && to) { params.append("from", from); params.append("to", to); }
        if (search) params.append("search", search);

        return {
          url: `/oversightFilter?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Users"],
    }),


    // Get Admins Datas

      getAdminProfile: builder.query<any, void>({
      query: () => "/profile",
      providesTags: ["Users"],
    }),


    updateAdminProfile: builder.mutation<any, Partial<{ name: string; phone: string; password: string }>>({
      query: (body) => ({
        url: "/profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Users"],
    }),




  }),
});

export const {
  useGetAllUsersQuery,
  useBlockUserMutation,
  useApproveDriverMutation,
  useGetRideOversightQuery,
  useGetAnalyticsQuery,
  useGetRideOversightFilterQuery,
  useGetAdminProfileQuery,
  useUpdateAdminProfileMutation,

} = adminApi;

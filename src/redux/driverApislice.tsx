
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Ride } from "./riderApiSlice";

/* ------------------ Types ------------------ */
export type ApiResponse<T> = { success: boolean; message?: string; data: T };
export type Paginated<T> = {
  success: boolean;
  total: number;
  page: number;
  limit: number;
  data: T[];
};

export type Driver = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "driver";
  isAvailable: boolean;
  vehicle?: { type?: "car" | "bike" | "cng"; plate?: string; color?: string };
};

export type RideAssignment = {
  id: string;
  riderName?: string;
  pickupLocation: string;
  destination: string;
  status: "pending" | "accepted" | "started" | "completed" | "canceled";
  fare?: number;
  requestedAt?: string;
};


export type RideStatusBackend = "picked_up" | "in_transit" | "completed";

export type EarningsSummary = {
  today: number;
  week: number;
  month: number;
  totalTrips: number;
};

/* ------------------ API Slice ------------------ */
export const driverApiSlice = createApi({
  reducerPath: "driverApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ride-booking-api.vercel.app/api/v1/ride",
    credentials: "include",
  }),
  tagTypes: ["Ride"],
  endpoints: (builder) => ({
    /* ---- Profile / Auth ---- */
    getMyRides: builder.query<ApiResponse<Ride[]>, void>({
      query: () => ({ url: "/history/driver", method: "GET" }),
      providesTags: ["Ride"],
    }),

    

    toggleAvailability: builder.mutation<
      { success: boolean; message?: string; available: boolean },
      { value?: boolean } | void
    >({
      query: (body) => ({ url: "/availability", method: "PATCH", body }),
    }),

    // Total Riders
    totalRider: builder.query({
      query: () => ({
        url: "/totalRide",
        method: "GET",
      }),
    }),

    acceptStatus: builder.mutation({
      query: (id: string) => ({
        url: `/accept/${id}`,
        method: "PATCH",
      }),
    }),



    updateStatus: builder.mutation<
      ApiResponse<Ride>,
      {
        id: string;
        status: "picked_up" | "in_transit" | "completed" | "cancelled";
      }
    >({
      query: ({ id, status }) => ({
        url: `/status/${id}`,
        method: "PATCH",
        body: { status }, 
      }),
    }),

   driverEarning: builder.query({
  query: (period = "all") => ({
    url: `/earnings?period=${period}`,
    method: "GET",
  }),
}),

getDriverRiderHistory: builder.query({
  query:(params:any) => ({
    url:"/history/driver",
    method:"GET",
    params:params
  })
}),

// Driver Profile Data Updates 


updateDriverProfile: builder.mutation<
  { message: string; driver: any },
  { name?: string; phone?: string; vehicle?: string; password?: string }
>({
  query: (data) => ({
    url: "/driver/profile",
    method: "PATCH",
    body: data,
    
  }),
}),








  }),
});

/* ------------------ Hooks ------------------ */
export const {
  useGetMyRidesQuery,
  useLazyGetMyRidesQuery,
  useToggleAvailabilityMutation,
  useTotalRiderQuery,
  useAcceptStatusMutation,
  useUpdateStatusMutation,
  useDriverEarningQuery,
  useGetDriverRiderHistoryQuery,
  useUpdateDriverProfileMutation,
} = driverApiSlice;

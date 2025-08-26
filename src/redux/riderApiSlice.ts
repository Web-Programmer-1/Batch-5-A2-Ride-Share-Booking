
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const getCsrfToken = () => {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(/(?:^|;\s*)csrf-token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
};


export interface RideRequestPayload {
  pickupLocation: string;
  destination: string;
  paymentMethod?: "cash" | "card" | "wallet";

}

export interface Ride {
  [x: string]: string;
 
  pickupLocation: string;
  destination: string;


}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  total:number;
}

type RideHistoryResponse = {
  success: boolean;
  total: number;
  data: Ride[];
};

export const rideApi = createApi({
  reducerPath: "rideApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ride-booking-api.vercel.app/api/v1/ride",
    credentials: "include", 
    
  }),
  tagTypes: ["Ride"],

endpoints: (builder) => ({

  requestRide: builder.mutation<ApiResponse<Ride>, RideRequestPayload>({
    query: (body) => ({
      url: "/request",
      method: "POST",
      body,
    }),
    invalidatesTags: ["Ride"],
  }),

  cancelRide: builder.mutation<ApiResponse<Ride>, { id: string }>({
    query: ({ id }) => ({
      url: `/cancel/${id}`,
      method: "PATCH",
    }),
    invalidatesTags: ["Ride"],
  }),

acceptRide: builder.mutation<ApiResponse<Ride>, { id: string }>({
  query: ({ id }) => ({
    url: `/accept/${id}`,
    method: "PATCH",
  }),
  invalidatesTags: ["Ride"],
}),

  getRideHistory: builder.query<ApiResponse<Ride[]>, { page?: number; limit?: number } | void>({
    query: (args) => {
      const page = args?.page ?? 1;
      const limit = args?.limit ?? 5;
      return {
        url: `/history?page=${page}&limit=${limit}`,
        method: "GET",
      };
    },
    providesTags: ["Ride"],
  }),

  getProfile: builder.query({
    query: (userId: string) => ({
      url: `profile/${userId}`,
      method: "GET",
    }),
  }),

  // Single Ride Details 

   getRideDetails: builder.query<any, string>({
      query: (id) => `/details/${id}`,
      providesTags:["Ride"]

    }),

}),
});

export const {
  useRequestRideMutation,
  useCancelRideMutation,
  useGetRideHistoryQuery,
  useGetProfileQuery,
  useAcceptRideMutation,
  useGetRideDetailsQuery,

  
} = rideApi;

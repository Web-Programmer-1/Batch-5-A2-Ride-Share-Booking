

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetRideHistoryQuery } from "../../redux/riderApiSlice";
import RideCancelButton from "./Ride_Cancel";
import Button from "../../components/registry/seraui/button";
import { CheckIcon } from "lucide-react";

const RideHistory: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading, isError } = useGetRideHistoryQuery({ page, limit });
  const totalPages =
    data && "total" in data ? Math.ceil((data as any).total / limit) : 1;

  if (isLoading) return <p className="text-center">Loading ride history...</p>;
  if (isError) return <p className="text-red-500 text-center">Error fetching data</p>;

  return (
    <div className="p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Ride History
        </h1>
        <p className="text-gray-600 text-sm">
          Here you can see all your previous rides, manage requests, and cancel if needed.
        </p>
        <div className="inline-block mt-2 px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
          Total Rides: {data?.total ?? 0}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data.map((ride, index) => (
          <div
            key={ride._id || index}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-5 hover:shadow-lg transition relative"
          >
            <h2 className="text-lg font-semibold text-orange-600 mb-2">
              Ride -{(page - 1) * limit + index + 1}
            </h2>

            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">Pickup:</span> {ride.pickupLocation}
              </p>
              <p>
                <span className="font-medium">Destination:</span> {ride.destination}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-semibold
                  ${
                    ride.status === "accepted"
                      ? "bg-green-100 text-green-700"
                      : ride.status === "requested"
                      ? "bg-yellow-100 text-yellow-700"
                      : ride.status === "cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {ride.status}
                </span>
              </p>
              <p>
                <span className="font-medium">Requested:</span>{" "}
                {new Date(ride.requestedAt).toLocaleString()}
              </p>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2">
              {ride.status === "requested" && <RideCancelButton rideId={ride._id} />}

              <Link to={`/ride/${ride._id}`}>
                <Button
                  className="bg-green-500 lg:mt-4 dark:bg-green-500 dark:text-white dark:hover:bg-green-800"
                  variant="default"
                  iconLeft={<CheckIcon />}
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm text-gray-700">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page >= totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RideHistory;

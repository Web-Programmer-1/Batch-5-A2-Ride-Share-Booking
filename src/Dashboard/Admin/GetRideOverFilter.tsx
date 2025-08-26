import { useState } from "react";
import { useGetRideOversightFilterQuery } from "../../redux/AdminApiSlice";
import SearchFilter from "./SearchFilter";


const RideOversightFilter = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const { data, isLoading } =  useGetRideOversightFilterQuery({ search, status, from, to });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Ride Oversight</h2>

      {/* Reusable Filter */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
      />

      {isLoading ? (
        <p>Loading rides...</p>
      ) : (
        <table className="w-full border rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Date.</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Driver</th>
              <th className="p-2 border">Rider</th>
              <th className="p-2 border">Pickup</th>
              <th className="p-2 border">Destination</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((ride: any) => (
              <tr key={ride._id} className="text-center hover:bg-gray-50">
                <td className="p-2 border">{new Date(ride.requestedAt).toLocaleDateString()}</td>
                <td className="p-2 border">{ride.status}</td>
                <td className="p-2 border">{ride.driver?.name || "N/A"}</td>
                <td className="p-2 border">{ride.ride?.name || "N/A"}</td>
                <td className="p-2 border">{ride.pickupLocation}</td>
                <td className="p-2 border">{ride.destination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RideOversightFilter;

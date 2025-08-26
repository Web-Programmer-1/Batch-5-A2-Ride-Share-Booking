import { useState } from "react";
import { motion } from "framer-motion";
import { useGetRideOversightQuery } from "../../redux/AdminApiSlice";

const RideOversight = () => {
  const [filters, setFilters] = useState({
    status: "",
    driver: "",
    rider: "",
    from: "",
    to: "",
  });

  const { data, isLoading } = useGetRideOversightQuery(filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🚖 Ride Oversight
      </motion.h2>

      {/* 🔍 Filter Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="date"
          name="from"
          value={filters.from}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="to"
          value={filters.to}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">All Status</option>
          <option value="requested">Requested</option>
          <option value="accepted">Accepted</option>
          <option value="picked_up">Picked Up</option>
          <option value="in_transit">In Transit</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <input
          type="text"
          name="driver"
          placeholder="Driver ID"
          value={filters.driver}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="rider"
          placeholder="Rider ID"
          value={filters.rider}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </motion.div>

      {/* 📊 Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Driver</th>
              <th className="p-3 text-left">Rider</th>
              <th className="p-3 text-left">$Earnings</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              // Skeleton Loader
              [...Array(5)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="p-3">
                    <div className="h-4 bg-gray-300 rounded w-20"></div>
                  </td>
                  <td className="p-3">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                  <td className="p-3">
                    <div className="h-4 bg-gray-300 rounded w-28"></div>
                  </td>
                  <td className="p-3">
                    <div className="h-4 bg-gray-300 rounded w-28"></div>
                  </td>
                  <td className="p-3">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                  </td>
                </tr>
              ))
            ) : (
              data?.data?.map((ride: any) => (
                <motion.tr
                  key={ride._id}
                  className="border-b hover:bg-gray-50 transition"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <td className="p-3">{new Date(ride.requestedAt).toLocaleDateString()}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded text-white text-sm ${
                        ride.status === "completed"
                          ? "bg-green-600"
                          : ride.status === "cancelled"
                          ? "bg-red-600"
                          : ride.status === "in_transit"
                          ? "bg-blue-500"
                          : ride.status === "accepted"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {ride.status}
                    </span>
                  </td>
                  <td className="p-3">{ride.driver?.name || "N/A"}</td>
                  <td className="p-3">{ride.ride?.name || "N/A"}</td>
                  <td className="p-3">${ride.fare || 0}</td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RideOversight;

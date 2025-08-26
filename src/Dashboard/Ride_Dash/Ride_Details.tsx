
import { useParams } from "react-router-dom";
import { useGetRideDetailsQuery } from "../../redux/riderApiSlice";
import { MapPin, Clock, Car, User } from "lucide-react";

const RideDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetRideDetailsQuery(id!);
  console.log(data)

  if (isLoading) return <p className="text-center mt-6">Loading ride details...</p>;
  if (!data?.data) return <p className="text-center mt-6">No ride found</p>;

  const ride = data.data;

  const timeline = [
    { label: "Requested", time: ride.requestedAt, active: ride.status === "requested" },
    { label: "Accepted", time: ride.acceptedAt, active: ride.status === "accepted" },
    { label: "Picked Up", time: ride.pickedUpAt, active: ride.status === "picked_up" },
    { label: "In Transit", time: ride.inTransitAt, active: ride.status === "in_transit" },
    { label: "Completed", time: ride.completedAt, active: ride.status === "completed" },
    { label: "Cancelled", time: ride.cancelledAt, active: ride.status === "cancelled" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6">🚖 Ride Details</h2>

      {/* Ride Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Ride Info</h3>
          <p><MapPin className="inline w-4 h-4 text-blue-500" /> Pickup: {ride.pickupLocation}</p>
          <p><MapPin className="inline w-4 h-4 text-red-500" /> Destination: {ride.destination}</p>
          <p><Clock className="inline w-4 h-4 text-gray-600" /> Fare: ${ride.fare || 0}</p>
          <p>Status: <span className="font-bold capitalize">{ride.status}</span></p>
        </div>

        {/* Driver Info */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Driver Info</h3>
          {ride.driver ? (
            <>
              <p><User className="inline w-4 h-4 text-green-500" /> {ride.driver.name}</p>
              <p>Email: {ride.driver.email}</p>
              <p>Phone: {ride.driver.phone || "N/A"}</p>
              <p><Car className="inline w-4 h-4 text-indigo-500" /> Vehicle: {ride.driver.vehicle || "N/A"}</p>
            </>
          ) : (
            <p>No driver assigned</p>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Ride Status Timeline</h3>
        <div className="flex flex-col space-y-4">
          {timeline.map(
            (step, i) =>
              step.time && (
                <div
                  key={i}
                  className={`p-3 rounded-lg border ${step.active ? "bg-blue-100 border-blue-400" : "border-gray-200"}`}
                >
                  <p className="font-medium">{step.label}</p>
                  <p className="text-sm text-gray-500">{new Date(step.time).toLocaleString()}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default RideDetails;

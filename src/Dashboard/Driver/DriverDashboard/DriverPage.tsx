// src/pages/DriverRidePage.tsx

import UpdateRideStatusCard from "./UpdatedRideStatus";

export default function DriverRidePage() {
  const currentRideId = "68a73ca4c967371c4b04b932"; // এখানে তোমার আসল ride _id বসাও
  return (
    <div className="p-6">
      <UpdateRideStatusCard rideId={currentRideId} />
    </div>
  );
}

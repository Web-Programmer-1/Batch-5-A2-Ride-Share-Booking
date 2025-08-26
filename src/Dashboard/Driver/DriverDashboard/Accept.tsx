// import { useTotalRiderQuery } from "../../../redux/driverApislice"
// import { useAcceptRideMutation } from "../../../redux/riderApiSlice";

// export default function Accept() {

//     const {data}=useTotalRiderQuery(undefined);
//      const [acceptRide] = useAcceptRideMutation();
//     console.log(acceptRide)
//     console.log(data)




//   return (
//     <div>
//       <h1>This is Accepting Status chanage= Complete | Cancel</h1>
//     </div>
//   )
// }












// src/Dashboard/Driver/DriverDashboard/Accept.tsx
import { useState, useMemo } from "react";
import { useAcceptStatusMutation, useTotalRiderQuery } from "../../../redux/driverApislice";
import Swal from "sweetalert2";

type Ride = {
  _id: string;
  pickupLocation?: string;
  destination?: string;
  status: "requested" | "accepted" | "started" | "completed" | "canceled";
  requestedAt?: string;
  fare?: number;
  rider?: string;
  driver?: string | null;
};

const badge = (s: Ride["status"]) => {
  if (s === "requested") return "bg-yellow-100 text-yellow-700";
  if (s === "accepted") return "bg-blue-100 text-blue-700";
  if (s === "completed") return "bg-green-100 text-green-700";
  if (s === "canceled") return "bg-red-100 text-red-700";
  return "bg-gray-100 text-gray-700";
};

export default function Accept() {
  const { data, isLoading, isError, refetch } = useTotalRiderQuery(undefined);
  const [acceptStatus, { isLoading: acceptingGlobal }] = useAcceptStatusMutation();
  const [pending, setPending] = useState<Record<string, boolean>>({});

  const rides: Ride[] = useMemo(() => data?.data ?? [], [data]);

  const handleUpdate = async (rideId: string, action: "accept") => {
    if (action !== "accept") return;
    try {
      setPending((p) => ({ ...p, [rideId]: true }));
      const res = await acceptStatus(rideId).unwrap(); // PATCH /accept/:id

      // ✅ Success হলে SweetAlert
      Swal.fire({
        title: "Ride Accepted!",
        text: res.message || "The ride has been successfully accepted.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });

    } catch (e) {
      console.error("Accept failed:", e);
      Swal.fire({
        title: "Error",
        text: "Failed to accept ride. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setPending((p) => ({ ...p, [rideId]: false }));
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-36 animate-pulse rounded-2xl border border-gray-200 bg-gray-100"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-red-600">
        Failed to load rides. <button onClick={() => refetch()} className="underline">Retry</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Total Rides ({rides.length})</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {rides.map((r) => {
          const isPending = !!pending[r._id] || acceptingGlobal;
          const canAccept = r.status === "requested" && !isPending;

          return (
            <div key={r._id} className="rounded-2xl border p-4 shadow-sm bg-white">
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="font-mono text-xs text-gray-500">#{r._id.slice(-6)}</div>
                <span className={`px-2 py-0.5 text-xs rounded-full ${badge(r.status)}`}>
                  {r.status}
                </span>
              </div>

              {/* Body */}
              <div className="space-y-1 text-sm text-gray-800">
                <div><strong>From:</strong> {r.pickupLocation ?? "-"}</div>
                <div><strong>To:</strong> {r.destination ?? "-"}</div>
                {typeof r.fare !== "undefined" && (
                  <div><strong>Fare:</strong> {r.fare}</div>
                )}
                {r.requestedAt && (
                  <div className="text-xs text-gray-500">
                    {new Date(r.requestedAt).toLocaleString()}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4 flex items-center gap-2">
                <select
                  className="border rounded-lg px-3 py-2 text-sm"
                  defaultValue=""
                  onChange={(e) => {
                    const action = e.target.value as "accept";
                    if (!action) return;
                    handleUpdate(r._id, action);
                    e.currentTarget.value = ""; // reset select
                  }}
                  disabled={!canAccept}
                >
                  <option value="" disabled>Update…</option>
                  <option value="accept" disabled={!canAccept}>Accept</option>
                </select>

                <button
                  onClick={() => handleUpdate(r._id, "accept")}
                  disabled={!canAccept}
                  className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm disabled:opacity-50"
                >
                  {isPending ? "Updating…" : "Accept"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

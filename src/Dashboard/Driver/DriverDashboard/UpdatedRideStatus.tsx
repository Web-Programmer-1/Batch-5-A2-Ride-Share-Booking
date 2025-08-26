// import { useTotalRiderQuery, useUpdateStatusMutation } from "../../../redux/driverApislice"

// export default function UpdatedRideStatus() {

//   const {data} = useTotalRiderQuery(undefined);
//   const [updateStatus]=useUpdateStatusMutation();
//   console.log(data)
//   return (
//     <div>
//       <h1>This is UpdateRideStatus</h1>
//     </div>
//   )
// }







// src/Dashboard/Driver/DriverDashboard/UpdatedRideStatus.tsx
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import {
  useTotalRiderQuery,
  useUpdateStatusMutation,
} from "../../../redux/driverApislice";

// ব্যাকএন্ডে যে স্ট্যাটাসগুলো আছে
type RideStatus =
  | "requested"
  | "accepted"
  | "picked_up"
  | "in_transit"
  | "completed"
  | "cancelled";

type Ride = {
  _id: string;
  pickupLocation?: string;
  destination?: string;
  status: RideStatus;
  requestedAt?: string;
  fare?: number;
  rider?: string;
  driver?: string | null;
};

const badge = (s: RideStatus) => {
  if (s === "requested") return "bg-yellow-100 text-yellow-700";
  if (s === "accepted") return "bg-blue-100 text-blue-700";
  if (s === "picked_up") return "bg-indigo-100 text-indigo-700";
  if (s === "in_transit") return "bg-purple-100 text-purple-700";
  if (s === "completed") return "bg-green-100 text-green-700";
  if (s === "cancelled") return "bg-red-100 text-red-700";
  return "bg-gray-100 text-gray-700";
};

// এই ফ্লো অনুযায়ী বাটনগুলো দেখাবো:
// Accepted → Picked Up → In Transit → Completed (বা Cancelled)
function nextActions(status: RideStatus) {
  switch (status) {
    case "accepted":
      return ["picked_up", "cancelled"];
    case "picked_up":
      return ["in_transit", "cancelled"];
    case "in_transit":
      return ["completed", "cancelled"];
    default:
     
      return [];
  }
}

export default function UpdatedRideStatus() {

  const { data, isLoading, isError, refetch } = useTotalRiderQuery(undefined);


  const [updateStatus, { isLoading: updatingGlobal }] = useUpdateStatusMutation();


  const [rows, setRows] = useState<Ride[]>([]);
  const [pending, setPending] = useState<Record<string, boolean>>({});

  // server data → local rows sync
  const serverRows: Ride[] = useMemo(() => data?.data ?? [], [data]);
  useEffect(() => {
    setRows(serverRows);
  }, [serverRows]);

  const markPending = (id: string, v: boolean) =>
    setPending((p) => ({ ...p, [id]: v }));

  const applyLocalStatus = (id: string, status: RideStatus) =>
    setRows((prev) => prev.map((r) => (r._id === id ? { ...r, status } : r)));

  // মূল আপডেট ফাংশন (কম্পোনেন্টের ভিতরেই সব)
  const doUpdate = async (
    rideId: string,
    status: "picked_up" | "in_transit" | "completed" | "cancelled"
  ) => {
    // confirm
    const ok = await Swal.fire({
      title: "Confirm Update",
      text: `Set status to "${status}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, update",
    });
    if (!ok.isConfirmed) return;

    // optimistic
    const before = rows.find((r) => r._id === rideId)?.status as RideStatus;
    try {
      markPending(rideId, true);
      applyLocalStatus(rideId, status);

      const res = await updateStatus({ id: rideId, status }).unwrap();

      await Swal.fire({
        title: "Updated",
        text: res?.message || `Status updated to ${status}`,
        icon: "success",
      });
    } catch (e: any) {
      // revert
      applyLocalStatus(rideId, before);
      await Swal.fire({
        title: "Error",
        text: e?.data?.message || "Failed to update status",
        icon: "error",
      });
    } finally {
      markPending(rideId, false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-36 animate-pulse rounded-2xl border bg-gray-100" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-red-600">
        Failed to load rides.{" "}
        <button onClick={() => refetch()} className="underline">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Active Ride Management ({rows.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {rows.map((r) => {
          const actions = nextActions(r.status);
          const isBusy = !!pending[r._id] || updatingGlobal;

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
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {/* Dropdown (Update…) */}
                {actions.length > 0 && (
                  <select
                    className="border rounded-lg px-3 py-2 text-sm"
                    defaultValue=""
                    onChange={(e) => {
                      const next = e.target.value as
                        | "picked_up"
                        | "in_transit"
                        | "completed"
                        | "cancelled";
                      if (!next) return;
                      doUpdate(r._id, next);
                      e.currentTarget.value = "";
                    }}
                    disabled={isBusy}
                  >
                    <option value="" disabled>Update…</option>
                    {actions.includes("picked_up") && (
                      <option value="picked_up">Picked Up</option>
                    )}
                    {actions.includes("in_transit") && (
                      <option value="in_transit">In Transit</option>
                    )}
                    {actions.includes("completed") && (
                      <option value="completed">Completed</option>
                    )}
                    {actions.includes("cancelled") && (
                      <option value="cancelled">Cancel</option>
                    )}
                  </select>
                )}

                {/* Quick buttons */}
                {actions.includes("picked_up") && (
                  <button
                    onClick={() => doUpdate(r._id, "picked_up")}
                    disabled={isBusy}
                    className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm disabled:opacity-50"
                  >
                    {isBusy ? "Working…" : "Picked Up"}
                  </button>
                )}
                {actions.includes("in_transit") && (
                  <button
                    onClick={() => doUpdate(r._id, "in_transit")}
                    disabled={isBusy}
                    className="px-3 py-2 rounded-lg bg-purple-600 text-white text-sm disabled:opacity-50"
                  >
                    {isBusy ? "Working…" : "In Transit"}
                  </button>
                )}
                {actions.includes("completed") && (
                  <button
                    onClick={() => doUpdate(r._id, "completed")}
                    disabled={isBusy}
                    className="px-3 py-2 rounded-lg bg-green-600 text-white text-sm disabled:opacity-50"
                  >
                    {isBusy ? "Working…" : "Completed"}
                  </button>
                )}
                {actions.includes("cancelled") && (
                  <button
                    onClick={() => doUpdate(r._id, "cancelled")}
                    disabled={isBusy}
                    className="px-3 py-2 rounded-lg bg-red-600 text-white text-sm disabled:opacity-50"
                  >
                    {isBusy ? "Working…" : "Cancel"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

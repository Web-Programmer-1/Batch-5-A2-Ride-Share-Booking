import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { useCancelRideMutation } from "../../redux/riderApiSlice";
import Swal from "sweetalert2";

interface Props {
  rideId: string;
  disabled?: boolean;
}

const RideCancelButton: React.FC<Props> = ({ rideId, disabled }) => {
  const [cancelRide, { isLoading }] = useCancelRideMutation();

  const handleCancel = async () => {
    try {
      await cancelRide({ id: rideId }).unwrap();
      Swal.fire({
        icon: "success",
        title: "Ride Cancel Successfully 🎉",
        text: `Welcome back`,
        confirmButtonColor: "#009111",
      });
    } catch (err) {
  const msg =
    typeof err === "string" ? err
    : err instanceof Error ? err.message
    : (err as any)?.data?.message ?? (err as any)?.error ?? "Something went wrong";

  Swal.fire({
    icon: "error",
    title: "Ride Failed ❌",
    text: String(msg),             
    confirmButtonColor: "#ef4444",
  });
}
  };

  return (
    <button
      onClick={handleCancel}
      disabled={disabled || isLoading}
      className="mt-4 flex items-center gap-2 px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition disabled:opacity-50"
    >
      <FaTimesCircle />
      {isLoading ? "Cancelling..." : "Cancel Ride"}
    </button>
  );
};

export default RideCancelButton;

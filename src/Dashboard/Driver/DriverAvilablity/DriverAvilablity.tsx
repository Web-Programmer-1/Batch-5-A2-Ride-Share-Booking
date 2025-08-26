import { useState } from "react";
import { useToggleAvailabilityMutation } from "../../../redux/driverApislice";
import Swal from "sweetalert2";

const DriverAvailability = () => {
  const [availability, setAvailability] = useState(false);
  const [toggleAvailability, { isLoading }] = useToggleAvailabilityMutation();

  const handleToggle = async () => {
    try {
      const res = await toggleAvailability().unwrap();
      setAvailability(res.available);

      Swal.fire({
        icon: "success",
        title: " Driver Status Successfully 🎉",
        text: `Welcome back`,
        confirmButtonColor: "#009111",
      });
    } catch (err) {
      const msg =
        typeof err === "string"
          ? err
          : err instanceof Error
          ? err.message
          : (err as any)?.data?.message ??
            (err as any)?.error ??
            "Something went wrong";

      Swal.fire({
        icon: "error",
        title: "Ride Failed ❌",
        text: String(msg),
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded w-80 mx-auto">
      <h2 className="text-lg font-bold mb-4">Driver Availability</h2>

      <button
        onClick={handleToggle}
        disabled={isLoading}
        className={`w-full p-2 rounded text-white ${
          availability ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {isLoading
          ? "Updating..."
          : availability
          ? "Online ✅ (Click to go Offline)"
          : "Offline ❌ (Click to go Online)"}
      </button>
    </div>
  );
};

export default DriverAvailability;

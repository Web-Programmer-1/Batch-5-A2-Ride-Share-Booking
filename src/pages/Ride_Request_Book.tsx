// import React from "react";
// import { useForm } from "react-hook-form";
// import { useRequestRideMutation } from "../redux/riderApiSlice";
// import img from "../assets/360_F_1053342471_vD8Ma4avjwYYSMQU2PZZxuznU3jARl9v.jpg";
// import { useNavigate } from "react-router-dom";

// type FormValues = {
//   pickupLocation: string;
//   destination: string;
//   paymentMethod: "cash" | "card" | "wallet";
// };

// const Ride_Request_Book: React.FC = () => {
//     const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormValues>();

//   const [requestRide, { isLoading, isSuccess, isError }] = useRequestRideMutation();

//   const onSubmit = async (data: FormValues) => {
//     try {
//     //   const res = await requestRide(data).unwrap();
//     //   console.log(res);
//       reset();
//       navigate("/rider")

//     } catch (err) {
//       console.error("Ride post error", err);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full relative bg-white overflow-hidden flex items-center justify-center px-4 py-12">
//       {/* Background Gradient Glow */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `
//             radial-gradient(circle at top left, rgba(70,130,180,0.4), transparent 70%),
//             radial-gradient(circle at bottom right, rgba(255,165,0,0.4), transparent 70%)
//           `,
//           filter: "blur(100px)",
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       {/* Main Content */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-6xl">
   
//         <div className="space-y-6 text-gray-700">
//           <img
//             src={img}
//             alt="Google map animation"
//             className="w-full max-w-md mx-auto animate-pulse duration-[6000ms] infinite"
//           />
//           <h2 className="text-2xl font-bold text-sky-600 text-center">How to Post a Ride</h2>
//           <ul className="list-disc list-inside text-base px-6 text-gray-800">
//             <li>Select your pickup and destination locations.</li>
//             <li>Choose your payment method.</li>
//             <li>Click "Post Ride" to book your journey.</li>
//           </ul>
//         </div>

//         {/* Right: Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div>
//             <label className="block font-medium text-gray-800">Pickup Location</label>
//             <input
//               type="text"
//               {...register("pickupLocation", { required: "Pickup location is required" })}
//               className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
//               placeholder="Enter pickup location"
//             />
//             {errors.pickupLocation && (
//               <p className="text-red-500 text-sm">{errors.pickupLocation.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block font-medium text-gray-800">Destination</label>
//             <input
//               type="text"
//               {...register("destination", { required: "Destination is required" })}
//               className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
//               placeholder="Enter destination"
//             />
//             {errors.destination && (
//               <p className="text-red-500 text-sm">{errors.destination.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block font-medium text-gray-800">Payment Method</label>
//             <select
//               {...register("paymentMethod")}
//               className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
//             >
//               <option value="cash">Cash</option>
//               <option value="card">Card</option>
//               <option value="wallet">Wallet</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-all shadow-lg"
//           >
//             {isLoading ? "Posting..." : "🚗 Post Ride"}
//           </button>

//           {isSuccess && (
//             <p className="text-green-600 text-sm font-medium text-center">
//               ✅ Ride posted successfully!
//             </p>
//           )}
//           {isError && (
//             <p className="text-red-500 text-sm font-medium text-center">
//               ❌ Failed to post ride. Try again.
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Ride_Request_Book;







import { useForm } from "react-hook-form";
import { useRequestRideMutation } from "../redux/riderApiSlice";
import img from "../assets/360_F_1053342471_vD8Ma4avjwYYSMQU2PZZxuznU3jARl9v.jpg";
import { useNavigate } from "react-router-dom";

type FormValues = {
  pickupLocation: string;
  destination: string;
  paymentMethod: "cash" | "card" | "wallet";
};

const Ride_Request_Book: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { paymentMethod: "cash" }, 
  });

  const [requestRide, { isLoading, isSuccess, isError }] = useRequestRideMutation();

  const onSubmit = async (data: FormValues) => {
    try {
     
      await requestRide(data).unwrap();
      reset();
      navigate("/rider");
    } catch (err) {
      console.error("Ride post error", err);
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-white overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Background Gradient Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at top left, rgba(70,130,180,0.4), transparent 70%),
            radial-gradient(circle at bottom right, rgba(255,165,0,0.4), transparent 70%)
          `,
          filter: "blur(100px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-6xl">
        {/* Left: Illustration and Steps */}
        <div className="space-y-6 text-gray-700">
          <img
            src={img}
            alt="Google map animation"
            className="w-full max-w-md mx-auto animate-pulse duration-[6000ms] infinite"
          />
          <h2 className="text-2xl font-bold text-sky-600 text-center">How to Post a Ride</h2>
          <ul className="list-disc list-inside text-base px-6 text-gray-800">
            <li>Select your pickup and destination locations.</li>
            <li>Choose your payment method.</li>
            <li>Click "Post Ride" to book your journey.</li>
          </ul>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-800">Pickup Location</label>
            <input
              type="text"
              {...register("pickupLocation", { required: "Pickup location is required" })}
              className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
              placeholder="Enter pickup location"
            />
            {errors.pickupLocation && (
              <p className="text-red-500 text-sm">{errors.pickupLocation.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-800">Destination</label>
            <input
              type="text"
              {...register("destination", { required: "Destination is required" })}
              className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
              placeholder="Enter destination"
            />
            {errors.destination && (
              <p className="text-red-500 text-sm">{errors.destination.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-800">Payment Method</label>
            <select
              {...register("paymentMethod", { required: true })}
              className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
            >
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="wallet">Wallet</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            {isLoading ? "Posting..." : "🚗 Post Ride"}
          </button>

          {isSuccess && (
            <p className="text-green-600 text-sm font-medium text-center">
              ✅ Ride posted successfully!
            </p>
          )}
          {isError && (
            <p className="text-red-500 text-sm font-medium text-center">
              ❌ Failed to post ride. Try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Ride_Request_Book;











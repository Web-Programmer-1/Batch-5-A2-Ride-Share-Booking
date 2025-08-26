// // src/pages/sections/HowItWorks.tsx
// "use client";
// import { Car, Smartphone, CheckCircle } from "lucide-react";

// const HowItWorks = () => {
//   const steps = [
//     {
//       id: 1,
//       title: "Request a Ride",
//       description: "Open the app, enter pickup & destination and request your ride instantly.",
//       icon: <Smartphone className="w-10 h-10 text-blue-600" />,
//     },
//     {
//       id: 2,
//       title: "Driver Accepts",
//       description: "Nearby drivers get notified and one of them accepts your ride request.",
//       icon: <Car className="w-10 h-10 text-green-600" />,
//     },
//     {
//       id: 3,
//       title: "Complete Ride",
//       description: "Driver picks you up and drops you safely at your destination.",
//       icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
//           How It Works
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
//             >
//               <div className="flex justify-center mb-4">{step.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
//                 {step.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;




// <div className="min-h-screen w-full relative">
//   {/* Radial Gradient Background from Bottom */}
//   <div
//     className="absolute inset-0 z-0"
//     style={{
//       background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
//     }}
//   />
//      {/* Your Content/Components */}
// </div>







// "use client";
// import { Car, Smartphone, CheckCircle } from "lucide-react";

// const HowItWorks = () => {
//   const steps = [
//     {
//       id: 1,
//       title: "Request a Ride",
//       description: "Open the app, enter pickup & destination and request your ride instantly.",
//       icon: <Smartphone className="w-10 h-10 text-blue-600" />,
//     },
//     {
//       id: 2,
//       title: "Driver Accepts",
//       description: "Nearby drivers get notified and one of them accepts your ride request.",
//       icon: <Car className="w-10 h-10 text-green-600" />,
//     },
//     {
//       id: 3,
//       title: "Complete Ride",
//       description: "Driver picks you up and drops you safely at your destination.",
//       icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
//     },
//   ];

//   return (
//     <section className="relative py-16 overflow-hidden">
//       {/* Radial Gradient Background */}
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
//         }}
//       />

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
//           How It Works
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
//             >
//               <div className="flex justify-center mb-4">{step.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
//                 {step.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;




"use client";
import { Car, Smartphone, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Request a Ride",
      description:
        "Open the BdRide app or website, enter your pickup and drop-off locations, and request a ride instantly. Choose the ride type that suits your needs — standard, shared, or premium.",
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 2,
      title: "Driver Accepts",
      description:
        "Nearby verified drivers are notified in real-time. A driver accepts your request and heads to your location. You’ll receive driver details and can track them live on the map.",
      icon: <Car className="w-10 h-10 text-green-600" />,
    },
    {
      id: 3,
      title: "Complete Ride",
      description:
        "Hop in and enjoy a smooth, safe, and comfortable ride to your destination. Pay digitally via app and rate your driver — helping us keep quality service.",
      icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">
          How It Works 🚗
        </h2>
        <p className="text-lg text-black max-w-3xl mx-auto mb-12">
          Getting from point A to point B has never been easier. BdRide brings you quick, affordable, and secure rides at your fingertips — anytime, anywhere in Bangladesh.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {step.title}
              </h3>
              <p className="text-black dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

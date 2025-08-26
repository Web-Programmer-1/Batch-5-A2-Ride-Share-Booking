


// import { motion } from "framer-motion";
// import {
//   FaMapMarkerAlt,
//   FaSearch,
//   FaCheckCircle,
//   FaRegCalendarAlt,
//   FaMousePointer,
// } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaMapMarkerAlt />,
//     text: "Go to the Ride Post page from the sidebar.",
//   },
//   {
//     icon: <FaRegCalendarAlt />,
//     text: "Enter your pickup and destination details along with date and time.",
//   },
//   {
//     icon: <FaSearch />,
//     text: "Tap Search to find available rides matching your criteria.",
//   },
//   {
//     icon: <FaMousePointer />,
//     text: "Click the Book Now button beside your selected ride.",
//   },
//   {
//     icon: <FaCheckCircle />,
//     text: "Confirm your booking and check status from Get History.",
//   },
// ];

// export default function HowToRideSteps() {
//   return (
//     <section className="relative min-h-[700px] w-full overflow-hidden py-20 px-4 md:px-12 lg:px-20 bg-white">
//       {/* Background Glow */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: "#ffffff",
//           backgroundImage: `
//             radial-gradient(circle at top center, rgba(70, 130, 180, 0.5), transparent 70%)
//           `,
//           filter: "blur(80px)",
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
//         {/* Left: Map + Ride Book Button */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center justify-center gap-6"
//         >
//           {/* Gradient Border Map */}
//           <div className="relative p-[6px] rounded-2xl bg-gradient-to-r from-sky-300 via-blue-700 to-sky-500 animate-border">
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.662948022017!2d108.00886024104861!3d13.978656984798745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c1fb13cc0d97b%3A0xe28ceab1486c431c!2zS2jDoWNoIHPhuqFuIEx1eHN0YXkgJiBDb2ZmZWU!5e0!3m2!1sen!2sbd!4v1735115809851!5m2!1sen!2sbd"
//                 className="w-[600px] h-80 rounded-2xl"
//                 loading="lazy"
//                 allowFullScreen
//               />
//             </div>
//           </div>

//           {/* Ride Book Button */}
//           <a
//             href="/rider"
//             className="relative inline-flex items-center gap-3 px-6 py-3 text-white font-semibold rounded-xl shadow-xl overflow-hidden animate-glow-gradient"
//           >
//             <span className="z-10 flex items-center gap-2">
//               <FaMapMarkerAlt className="text-xl" />
//               Ride Book
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-[length:200%_200%] animate-glow rounded-xl" />
//           </a>
//         </motion.div>

//         {/* Right: Steps Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           {/* Section Title */}
//           <motion.h2
//             className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             How to Ride
//           </motion.h2>

//           {/* Step List */}
//           <ul className="space-y-6 text-lg text-gray-800 leading-relaxed">
//             {steps.map((step, index) => (
//               <motion.li
//                 key={index}
//                 whileHover={{ scale: 1.02, x: 8 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className={`flex items-start gap-4 ${
//                   index < 3
//                     ? "bg-gradient-to-r from-orange-50 to-yellow-100 rounded-xl px-4 py-3"
//                     : ""
//                 }`}
//               >
//                 <span className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-500 text-white text-lg shadow-md">
//                   {step.icon}
//                 </span>
//                 <span className="flex-1">{step.text}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>

//       {/* Custom CSS for animation */}
//       <style>{`
//         @keyframes borderFlow {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
//         .animate-border {
//           background-size: 200% 200%;
//           animation: borderFlow 3s linear infinite;
//         }

//         @keyframes glowLoop {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
//         .animate-glow-gradient {
//           position: relative;
//         }
//         .animate-glow-gradient .animate-glow {
//           z-index: 1;
//           animation: glowLoop 4s linear infinite;
//           background-size: 200% 200%;
//           border-radius: 0.75rem;
//         }
//         .animate-glow-gradient:hover .animate-glow {
//           filter: brightness(1.2);
//         }
//       `}</style>
//     </section>
//   );
// }








// import { motion } from "framer-motion";
// import {
//   FaMapMarkerAlt,
//   FaSearch,
//   FaCheckCircle,
//   FaRegCalendarAlt,
//   FaMousePointer,
// } from "react-icons/fa";

// const steps = [
//   { icon: <FaMapMarkerAlt />, text: "Go to the Ride Post page from the sidebar." },
//   { icon: <FaRegCalendarAlt />, text: "Enter your pickup and destination details along with date and time." },
//   { icon: <FaSearch />, text: "Tap Search to find available rides matching your criteria." },
//   { icon: <FaMousePointer />, text: "Click the Book Now button beside your selected ride." },
//   { icon: <FaCheckCircle />, text: "Confirm your booking and check status from Get History." },
// ];

// export default function HowToRideSteps() {
//   return (
//     <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         style={{
//           background: "#ffffff",
//           backgroundImage:
//             "radial-gradient(circle at top center, rgba(70,130,180,0.45), transparent 70%)",
//           filter: "blur(70px)",
//           backgroundRepeat: "no-repeat",
//         }}
//         aria-hidden
//       />

//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="flex flex-col items-center justify-center gap-6 w-full"
//         >
//           <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl p-[4px] sm:p-[5px] md:p-[6px] rounded-2xl bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 animate-border">
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
//               <iframe
//                 src="https://www.google.com/maps?q=23.8103,90.4125&z=13&output=embed"
//                 className="w-full h-56 sm:h-64 md:h-80 lg:h-[420px] rounded-2xl"
//                 loading="lazy"
//                 allowFullScreen
//                 title="Ride pickup map"
//               />
//             </div>
//           </div>

//           <a
//             href="/rider"
//             className="relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-xl shadow-xl overflow-hidden animate-glow-gradient"
//           >
//             <span className="z-10 flex items-center gap-2">
//               <FaMapMarkerAlt className="text-lg sm:text-xl" />
//               Ride Book
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-[length:200%_200%] animate-glow rounded-xl" />
//           </a>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.h2
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             How to Ride
//           </motion.h2>

//           <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-gray-800 leading-relaxed">
//             {steps.map((step, index) => (
//               <motion.li
//                 key={index}
//                 whileHover={{ scale: 1.02, x: 8 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className={`flex items-start gap-3 sm:gap-4 ${
//                   index < 3 ? "bg-gradient-to-r from-orange-50 to-yellow-100 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3" : ""
//                 }`}
//               >
//                 <span className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-orange-500 text-white text-base sm:text-lg shadow-md shrink-0">
//                   {step.icon}
//                 </span>
//                 <span className="flex-1">{step.text}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>

//       <style>{`
//         @keyframes borderFlow { 0% {background-position:0% 50%} 100% {background-position:100% 50%} }
//         .animate-border { background-size:200% 200%; animation:borderFlow 3s linear infinite; }

//         @keyframes glowLoop { 0% {background-position:0% 50%} 100% {background-position:100% 50%} }
//         .animate-glow-gradient { position:relative; }
//         .animate-glow-gradient .animate-glow { z-index:1; animation:glowLoop 4s linear infinite; background-size:200% 200%; border-radius:0.75rem; }
//         .animate-glow-gradient:hover .animate-glow { filter:brightness(1.15); }
//       `}</style>
//     </section>
//   );
// }








import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaCheckCircle,
  FaRegCalendarAlt,
  FaMousePointer,
} from "react-icons/fa";

const steps = [
  { icon: <FaMapMarkerAlt />, text: "Go to the Ride Post page from the sidebar." },
  { icon: <FaRegCalendarAlt />, text: "Enter your pickup and destination details along with date and time." },
  { icon: <FaSearch />, text: "Tap Search to find available rides matching your criteria." },
  { icon: <FaMousePointer />, text: "Click the Book Now button beside your selected ride." },
  { icon: <FaCheckCircle />, text: "Confirm your booking and check status from Get History." },
];

export default function HowToRideSteps() {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20   px-6 sm:px-6 md:px-12 lg:px-20">
      {/* Amber Glow Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center lg:py-24 ">
        {/* Left: Map & Button */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center gap-6 w-full"
        >
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl p-[6px] rounded-2xl bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 animate-border">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
              <iframe
                src="https://www.google.com/maps?q=23.8103,90.4125&z=13&output=embed"
                className="w-full h-56 sm:h-64 md:h-80 lg:h-[420px] rounded-2xl"
                loading="lazy"
                allowFullScreen
                title="Ride pickup map"
              />
            </div>
          </div>

          <a
            href="/rider"
            className="relative inline-flex items-center gap-2 sm:gap-3 px-5 py-3 text-white font-semibold rounded-xl shadow-xl overflow-hidden animate-glow-gradient"
          >
            <span className="z-10 flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg sm:text-xl" />
              Ride Book
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-[length:200%_200%] animate-glow rounded-xl" />
          </a>
        </motion.div>

        {/* Right: Steps */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How to Ride
          </motion.h2>

          <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-gray-800 leading-relaxed">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.02, x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex items-start gap-3 sm:gap-4 ${
                  index < 3 ? "bg-gradient-to-r from-orange-50 to-yellow-100 rounded-xl px-4 py-3" : ""
                }`}
              >
                <span className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-orange-500 text-white text-base sm:text-lg shadow-md shrink-0">
                  {step.icon}
                </span>
                <span className="flex-1">{step.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <style>{`
        @keyframes borderFlow { 
          0% {background-position:0% 50%} 
          100% {background-position:100% 50%} 
        }
        .animate-border { 
          background-size:200% 200%; 
          animation:borderFlow 3s linear infinite; 
        }
        @keyframes glowLoop { 
          0% {background-position:0% 50%} 
          100% {background-position:100% 50%} 
        }
        .animate-glow-gradient { position:relative; }
        .animate-glow-gradient .animate-glow { 
          z-index:1; 
          animation:glowLoop 4s linear infinite; 
          background-size:200% 200%; 
          border-radius:0.75rem; 
        }
        .animate-glow-gradient:hover .animate-glow { filter:brightness(1.15); }
      `}</style>
    </section>
  );
}

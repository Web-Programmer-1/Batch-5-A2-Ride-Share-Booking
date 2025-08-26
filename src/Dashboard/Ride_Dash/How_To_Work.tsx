// components/HowToWork.tsx
import { motion } from 'framer-motion';
import gif from "../../assets/maxresdefault.jpg"
const steps = [
  "Go to the Ride Post page from the sidebar.",
  "Enter your pickup and destination details along with date and time.",
  "Tap Search to find available rides matching your criteria.",
  "Click the Book Now button beside your selected ride.",
  "Confirm your booking and check status from Get History.",
];

export default function HowToWork() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left: Animation/Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={gif} // replace with actual path or use Lottie player here
            alt="Ride Booking Animation"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Right: Text Instructions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-6">How to Book a Ride</h2>
          <ul className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.02, x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start gap-3"
              >
                <span className="flex items-center justify-center h-9 w-9 rounded-full bg-orange-600 text-white font-semibold text-md shadow">
                  {index + 1}
                </span>
                <span>{step}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

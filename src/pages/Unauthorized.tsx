import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../assets/401-error-unauthorized-concept-illustration_114360-1934.avif"

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 flex items-center justify-center px-6">
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-8 max-w-xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-48 mx-auto mb-6">
            <img src={img} alt="" />
        </div>

        <h2 className="text-gray-500 text-sm font-semibold">Unauthorized Access</h2>
        <h1 className="text-3xl font-bold text-orange-600 mb-2">Oops! Unauthorized 🚫</h1>
        <p className="text-gray-600 mb-4">
          You don’t have permission to access this page.
        </p>

        <Link
          to="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}

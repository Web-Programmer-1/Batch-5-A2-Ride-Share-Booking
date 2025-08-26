// NotFound.tsx

import React from "react";
import { Link } from "react-router-dom"; 
import img from "../assets/NotFound.png"

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
  
      <div className="w-72 h-72 mb-8 animate-spin-slow">
        <img
          src={img}
          alt="Not Found"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

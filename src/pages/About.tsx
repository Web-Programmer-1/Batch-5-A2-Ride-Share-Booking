

import img from "../assets/RideExpeditions-Logo-Final_Version_3_Main_3000x968px.png";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-orange-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Ride Share Bd</h1>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
              About Us
            </h2>
            <p className="text-lg mb-4">
              Ride Share Bd is your trusted partner for convenient and safe ride
              booking across Bangladesh. Whether you’re commuting to work,
              heading to the airport, or exploring a new city — we’ve got you
              covered.
            </p>
            <p className="text-lg mb-4">
              Our mission is to make transportation reliable, accessible, and
              affordable for everyone. With real-time tracking, professional
              drivers, and 24/7 service, Ride Share Bd ensures that you reach
              your destination safely and on time.
            </p>
            <p className="text-lg">
              Join thousands of happy riders and experience smarter travel today.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={img}
              alt="Ride Sharing"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 text-center text-sm py-6">
        &copy; 2025 Ride Share Bd. All rights reserved.
      </footer>
    </div>
  );
};

export default About;

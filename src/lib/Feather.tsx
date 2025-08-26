// Features.tsx

import React from "react";

const Features: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="bg-orange-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Our Features</h1>
        <p className="text-sm mt-1">Why thousands choose Ride Share Bd</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">24/7 Availability</h2>
            <p className="text-gray-700">
              Book a ride anytime, anywhere. We're always on the road for you — day or night.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">Real-time Tracking</h2>
            <p className="text-gray-700">
              Track your driver and know exactly when they'll arrive — no guesswork.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">Secure Payments</h2>
            <p className="text-gray-700">
              Pay with confidence using mobile banking, credit cards, or cashless wallets.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">Professional Drivers</h2>
            <p className="text-gray-700">
              Courteous, trained, and background-checked drivers ensure a safe journey.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">Affordable Rates</h2>
            <p className="text-gray-700">
              Get from point A to B without breaking the bank — no surge pricing.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">Eco-Friendly Options</h2>
            <p className="text-gray-700">
              Choose electric and hybrid vehicles to reduce your carbon footprint.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6">
        &copy; 2025 Ride Share Bd. All rights reserved.
      </footer>
    </div>
  );
};

export default Features;

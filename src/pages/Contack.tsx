// Contact.tsx

import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-orange-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-sm mt-1">We’re here to help — reach out anytime!</p>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold text-orange-600">Get in Touch</h2>
            <p className="text-lg">
              Have questions, feedback, or need support? Reach us through any of the methods below.
            </p>
            <ul className="space-y-3 text-lg">
              <li><strong>Email:</strong> support@ridesharebd.com</li>
              <li><strong>Phone:</strong> +880 1234 567890</li>
              <li><strong>Address:</strong> 123 Gulshan Ave, Dhaka, Bangladesh</li>
            </ul>
            <div className="flex gap-4 pt-4">
              {/* Social icons — add actual icons if using something like react-icons */}
              <a href="#" className="text-orange-600 hover:underline">Facebook</a>
              <a href="#" className="text-orange-600 hover:underline">Instagram</a>
              <a href="#" className="text-orange-600 hover:underline">Twitter</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-6 bg-gray-100">
        &copy; 2025 Ride Share Bd. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;

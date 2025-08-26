"use client";
import { ShieldCheck, User } from "lucide-react";

const features = [
  {
    title: "Rider Features",
    icon: <User className="w-8 h-8 text-blue-600" />,
    description:
      "Book rides instantly, track your driver in real-time, rate trips, pay securely via app, and view ride history.",
  },
  {
    title: "Driver Capabilities",
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    description:
      "Accept ride requests, navigate via built-in map, manage availability, receive earnings reports, and maintain ratings.",
  },
  {
    title: "Admin Controls",
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
    description:
      "Manage users, verify drivers, oversee ride operations, handle support tickets, and monitor system analytics.",
  },
];

const FeaturesOverview = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Features Overview
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-14 max-w-3xl mx-auto">
          Discover the core functionalities tailored for Riders, Drivers, and Admins — built to ensure a seamless, secure, and scalable ride-sharing experience.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;

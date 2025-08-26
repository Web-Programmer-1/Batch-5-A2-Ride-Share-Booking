

import React, { useState, type JSX } from "react";

import {FaHistory, FaSearch, FaFilter, FaToggleOff, FaListAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

import Accept from "./Accept";
import UpdatedRideStatus from "./UpdatedRideStatus";
import EarningsDashboard from "./Earnings";

import DriverRideHistory from "./DriverRideHistory";
import DriverAvailability from "../DriverAvilablity/DriverAvilablity";
import DriverProfile from "./DriverProfile";

<FaCarSide className="inline-block mr-2" />


type TabItem = {
  label: string;
  icon: JSX.Element;
};

const tabs: TabItem[] = [
  { label: "DriverAvailability", icon: <FaToggleOff className="inline-block mr-2" /> },
  { label: "Ride (Accept| Reject)", icon: <FaCarSide className="inline-block mr-2" /> },
  { label: "Update Status", icon: <FaHistory className="inline-block mr-2" /> },
  { label: "Earnings", icon: <FaHistory className="inline-block mr-2" /> },
  { label: "All Ride History", icon: <FaListAlt className="inline-block mr-2" /> },
  { label: "Driver Profile", icon: <FaListAlt className="inline-block mr-2" /> },
];

const DriverDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Ride Post");

  const renderContent = () => {
    switch (activeTab) {
      case "DriverAvailability":
        return (
          <div>
           <DriverAvailability></DriverAvailability>
          </div>
        );
      case "Ride (Accept| Reject)":
        return <Accept></Accept>;
      case "Update Status":
        return (
          <div>
           <UpdatedRideStatus></UpdatedRideStatus>
          </div>
        );
        
      case "Earnings":
        return (
          <div>
         <EarningsDashboard></EarningsDashboard>
          </div>
        );



      case "All Ride History":
        return (
          <div>
         <DriverRideHistory></DriverRideHistory>
          </div>
        );



      case "Driver Profile":
        return (
          <div>
         <DriverProfile></DriverProfile>
          </div>
        );



     
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <div className="w-[15%] bg-white shadow-md border-r">
        <div className="text-xl font-bold p-6 border-b border-gray-200 text-orange-600">
          Booking Ride BD
        </div>
        <nav className="flex flex-col mt-4">
          {tabs.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`px-6 py-3 text-left flex items-center hover:bg-orange-100 transition 
                ${activeTab === label ? "bg-orange-200 font-semibold" : ""}`}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-[85%] p-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
            Ride Booking Dashboard
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Manage your rides, check history, and learn how to use the platform.
          </p>
        </div>

        {/* Advanced Filter Bar (Design Only) */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow rounded mb-6 gap-4">
          {/* Search */}
          <div className="flex items-center w-full md:w-1/2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search rides..."
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <select className="border border-gray-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400">
              <option value="">Status</option>
              <option value="requested">Requested</option>
              <option value="accepted">Accepted</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select className="border border-gray-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400">
              <option value="">Sort By</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600 transition">
              <FaFilter />
              Apply
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded shadow p-6 min-h-[400px]">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DriverDashboard;









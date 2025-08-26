
import React, { useState, type JSX } from "react";
import { FaCar, FaHistory, FaBookOpen, FaSearch, FaFilter, FaBars, FaUser } from "react-icons/fa";
import Ride_Request from "./Ride_Request";
import RideHistory from "./Ride_History";
import Profile from "./User_Profile";
import HowToWork from "./How_To_Work";



type TabItem = {
  label: string;
  icon: JSX.Element;
};

const tabs: TabItem[] = [
  { label: "Ride Post", icon: <FaCar className="inline-block mr-2" /> },
  { label: "How To Work", icon: <FaBookOpen className="inline-block mr-2" /> },
  { label: "Get History", icon: <FaHistory className="inline-block mr-2" /> },
{ label: "User Profile", icon: <FaUser className="inline-block mr-2" /> }
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Ride Post");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Ride Post":
        return <Ride_Request />;
      case "How To Work":
        return <HowToWork></HowToWork>;


  
      case "Get History":
        return <RideHistory />;
      case "User Profile":
        return <Profile></Profile>;
      default:
        return <RideHistory></RideHistory>;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 md:w-[15%] bg-white shadow-md border-r z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="text-xl font-bold p-6 border-b border-gray-200 text-orange-600 flex justify-between items-center md:block">
          Book Share BD
          {/* Close button for mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-600 text-lg font-bold"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col mt-4">
          {tabs.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => {
                setActiveTab(label);
                setSidebarOpen(false); // auto close on mobile
              }}
              className={`px-6 py-3 text-left flex items-center hover:bg-orange-100 transition 
                ${activeTab === label ? "bg-orange-200 font-semibold" : ""}`}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 w-full">
        {/* Top bar (mobile menu button + header) */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 bg-orange-500 text-white rounded shadow"
          >
            <FaBars />
          </button>

          {/* Header Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              Ride Booking Dashboard
            </h1>
            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Manage your rides, check history, and learn how to use the platform.
            </p>
          </div>
        </div>

 
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow rounded mb-6 gap-4">
          {/* Search */}
          <div className="flex items-center w-full md:w-1/2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search rides..."
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <select className="w-full sm:w-auto border border-gray-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400">
              <option value="">Status</option>
              <option value="requested">Requested</option>
              <option value="accepted">Accepted</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select className="w-full sm:w-auto border border-gray-200 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400">
              <option value="">Sort By</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600 transition">
              <FaFilter />
              Apply
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded shadow p-4 md:p-6 min-h-[400px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

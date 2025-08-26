import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Car, DollarSign, Activity } from "lucide-react";
import { useGetAnalyticsQuery } from "../../redux/AdminApiSlice";

const AnalyticsDashboard = () => {
  const { data, isLoading } = useGetAnalyticsQuery();

  const stats = [
    {
      label: "Total Users",
      value: data?.data?.totalUsers || 0,
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      label: "Total Drivers",
      value: data?.data?.totalDrivers || 0,
      icon: <Car className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      label: "Total Rides",
      value: data?.data?.totalRides || 0,
      icon: <Activity className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Total Revenue",
      value: `$${data?.data?.totalRevenue || 0}`,
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
    },
  ];

  // demo chart data (তুমি চাইলে backend থেকে ride trends আনতে পারো)
  const chartData = [
    { name: "Jan", rides: 30, revenue: 200 },
    { name: "Feb", rides: 45, revenue: 300 },
    { name: "Mar", rides: 60, revenue: 500 },
    { name: "Apr", rides: 50, revenue: 400 },
  ];

  return (
    <div className="p-6">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📊 Analytics Dashboard
      </motion.h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className={`bg-gradient-to-r ${stat.color} text-white p-6 rounded-xl shadow-lg flex items-center justify-between`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div>
              <p className="text-sm opacity-80">{stat.label}</p>
              <h3 className="text-2xl font-bold">{isLoading ? "..." : stat.value}</h3>
            </div>
            {stat.icon}
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-lg font-semibold mb-4">📈 Ride & Revenue Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="rides" fill="#4F46E5" radius={[6, 6, 0, 0]} />
            <Bar dataKey="revenue" fill="#F59E0B" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default AnalyticsDashboard;

import  { useState } from "react";

// adjust path if needed
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useDriverEarningQuery } from "../../../redux/driverApislice";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const EarningsDashboard = () => {
  const [period, setPeriod] = useState("daily");
  const { data, isLoading, isError } = useDriverEarningQuery(period);

  if (isLoading) return <p>Loading earnings...</p>;
  if (isError || !data?.success) return <p>Failed to fetch earnings</p>;

  const { total, breakdown } = data;

  const labels = Object.keys(breakdown).sort();
  const values = labels.map((key) => breakdown[key]);

  const chartData = {
    labels,
    datasets: [
      {
        label: `Earnings (${period})`,
        data: values,
        backgroundColor: "#f97316",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      tooltip: { mode: "index" as const, intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (val: any) => `$${val}` },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Driver Earnings</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="all">All</option>
        </select>
      </div>

      <p className="text-lg font-medium mb-4">
        Total Earnings: <span className="text-green-600">${total.toFixed(2)}</span>
      </p>

      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default EarningsDashboard;



















import { useState, type JSX } from 'react';

const tabs = [
  { key: 'bike', label: 'Bike' },
  { key: 'car', label: 'Car' },
  { key: 'food', label: 'Food' },
  { key: 'parcel', label: 'Parcel' },
];

const tabContent: Record<string, JSX.Element> = {
  bike: (
    <div>
      <h2 className="text-xl font-semibold mb-2">Fast Bike Rides</h2>
      <p className="text-gray-600">
        Book a bike ride for quick and affordable travel through traffic.
      </p>
    </div>
  ),
  car: (
    <div>
      <h2 className="text-xl font-semibold mb-2">Comfortable Car Rides</h2>
      <p className="text-gray-600">
        Get a private car for long rides or when you need more space and comfort.
      </p>
    </div>
  ),
  food: (
    <div>
      <h2 className="text-xl font-semibold mb-2">Food Delivery</h2>
      <p className="text-gray-600">
        Order from your favorite restaurants and get it delivered in no time.
      </p>
    </div>
  ),
  parcel: (
    <div>
      <h2 className="text-xl font-semibold mb-2">Send Parcels</h2>
      <p className="text-gray-600">
        Send packages quickly and safely across the city with our delivery partners.
      </p>
    </div>
  ),
};

export default function RideTabs() {
  const [activeTab, setActiveTab] = useState('bike');

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 font-medium transition-colors duration-200 ${
              activeTab === tab.key
                ? 'border-b-2 border-orange-500 text-orange-500'
                : 'text-gray-500 hover:text-orange-500'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-sm sm:text-base">{tabContent[activeTab]}</div>
    </div>
  );
}

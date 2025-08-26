"use client"


function Testimonial() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-4 
          bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
          What Our Users Say
        </h1>

        <p className="text-base sm:text-lg text-center max-w-3xl mb-12 
          bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Real experiences from Riders, Drivers, and Admins who trust our platform
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
          <div className="bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 
            p-8 rounded-2xl shadow-lg border border-orange-200">
            <p className="text-lg text-gray-800 leading-relaxed mb-6 italic">
              "Booking a ride is super fast and hassle-free. I can track my driver in real time and 
              feel safe during the ride. This app made my daily commute so much easier!"
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Rider"
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-400"
              />
              <div>
                <p className="font-semibold text-gray-900">Ayesha Rahman</p>
                <p className="text-sm text-gray-600">Daily Rider</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 
            p-8 rounded-2xl shadow-lg border border-orange-200">
            <p className="text-lg text-gray-800 leading-relaxed mb-6 italic">
              "As a driver, I love the transparent earning reports and fair ride distribution. 
              The app helps me get more rides easily while giving me flexibility."
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/43.jpg"
                alt="Driver"
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-400"
              />
              <div>
                <p className="font-semibold text-gray-900">Rahim Uddin</p>
                <p className="text-sm text-gray-600">Driver</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 
            p-6 rounded-2xl shadow-lg border border-orange-200">
            <p className="text-base text-gray-800 leading-relaxed mb-6 italic">
              "The scheduling feature is amazing! I can book rides in advance and never worry about 
              missing flights or important meetings."
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Business Traveler"
                className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-orange-400"
              />
              <div>
                <p className="font-semibold text-gray-900">Nusrat Jahan</p>
                <p className="text-sm text-gray-600">Business Traveler</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 
            p-6 rounded-2xl shadow-lg border border-orange-200">
            <p className="text-base text-gray-800 leading-relaxed mb-6 italic">
              "The admin dashboard gives me full control and insights. Managing rides, drivers, and 
              reports has never been this simple."
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt="Admin"
                className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-orange-400"
              />
              <div>
                <p className="font-semibold text-gray-900">Karim Hossain</p>
                <p className="text-sm text-gray-600">Platform Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

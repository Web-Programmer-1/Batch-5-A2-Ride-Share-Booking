import { Link } from "react-router-dom";
import gallery from "../assets/gallery.jpg";
import UiverseBtn from "../lib/UIverseBtn";

const Shapes = () => (
  <>
    {/* Background Decorative Shapes */}
    <img
      src="https://cdn.easyfrontend.com/pictures/hero/header34-svg1.png"
      alt="decorative shape"
      className="absolute top-0 left-0 max-w-full h-auto hidden md:block"
    />
    <img
      src="https://cdn.easyfrontend.com/pictures/hero/header34-svg2.png"
      alt="decorative shape"
      className="absolute bottom-0 left-0 max-w-full h-auto hidden md:block"
    />

    <div className="absolute top-0 right-[8%] h-full w-[300px] bg-slate-100 dark:bg-slate-800 rounded-3xl hidden md:block -z-10">
      <img
        src="https://cdn.easyfrontend.com/pictures/hero/header34-svg3.png"
        alt="decorative shape"
        className="absolute top-[10%] left-0 text-blue-600 max-w-full h-auto hidden md:block"
      />
      <img
        src="https://cdn.easyfrontend.com/pictures/hero/header34-svg4.png"
        alt="decorative shape"
        className="absolute bottom-0 right-0 max-w-full h-auto hidden md:block"
      />
    </div>
  </>
);

const Hero = () => {
  return (
    <header
      className="relative z-10 overflow-hidden py-14 md:py-24 text-zinc-900 dark:text-white"
      style={{
        background: "#020617",
        backgroundImage: `
          linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
        `,
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      }}
    >
      <Shapes />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Text Content */}
          <div className="col-span-12 lg:col-span-6 xl:pr-12 text-center lg:text-left">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
              Ride Anywhere. Anytime. Safely.
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed">
              A powerful, real-time ride booking system for Riders, Drivers, and
              Admins. Fully responsive, secure, and easy to use across all your
              devices.
            </p>

            <div className="flex  items-center gap-2">
              <Link to={"/rider"}>
                <UiverseBtn></UiverseBtn>
              </Link>

          

            </div>
          </div>

          {/* Image */}
          <div className="col-span-12 lg:col-span-6">
            <img
              src={gallery}
              alt="Ride Booking Illustration"
              className="rounded-xl lg:max-w-[500px] max-w-[250px] h-auto mx-auto mt-4 md:mt-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

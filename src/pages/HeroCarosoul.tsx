import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import UiverseBtn from "../lib/UIverseBtn";

const slides = [
  "https://www.cubetaxi.com/blog/wp-content/uploads/2025/08/Taxi-Booking-App-Like-Taxi-Proxi-in-France.jpg",
  "https://cubetaxi.wordpress.com/wp-content/uploads/2023/12/ride-hailing-app.png?w=1024",
  "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg",
];

const HeroCarousel = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <Carousel
          autoPlay
          infiniteLoop
          interval={2800}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
          swipeable
          emulateTouch
          showArrows
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev ? (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : null
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext ? (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : null
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <li
              className={`mx-1 inline-block h-2 w-2 rounded-full cursor-pointer ${
                isSelected ? "bg-white" : "bg-white/50"
              }`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          )}
        >
          {slides.map((src, i) => (
            <div key={i} className="relative">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 md:bg-black/45" />
            </div>
          ))}
        </Carousel>

        <div className="pointer-events-none absolute inset-0 grid place-items-center px-4">
          <div className="max-w-4xl text-center text-white">
            <h1 className="pointer-events-auto text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow">
              Step Into Luxury, Stay in Style
            </h1>
            <p className="pointer-events-auto mt-4 text-sm md:text-base lg:text-lg opacity-95">
              Discover comfort and sophistication with our ride-ready stays.
              Seamless booking, reliable drivers, and personalized experiences.
            </p>
            <div className="pointer-events-auto mt-6 flex items-center justify-center gap-3">
              <Link to="/rider">
                <UiverseBtn></UiverseBtn>
              </Link>

              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2
             px-6 py-3 rounded-lg bg-transparent
             text-white font-semibold
             border border-white/70 hover:border-white
             hover:bg-white/10
             transition-colors
             focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <PlayCircle className="w-5 h-5" />
                <span>How it Works</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;

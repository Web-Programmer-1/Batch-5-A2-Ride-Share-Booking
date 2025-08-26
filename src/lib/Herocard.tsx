import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MapPin, Navigation, Clock, BadgeCheck} from "lucide-react";
import type { EmblaOptionsType } from "embla-carousel";

// ---------- Types ----------
export type Ride = {
  id: string | number;
  riderName?: string;
  pickup: string;
  destination: string;
  status: "requested" | "accepted" | "ongoing" | "completed" | "cancelled";
  requestedAt: string; // ISO or readable string
};

// ---------- Sample Data (remove in prod) ----------
const sampleRides: Ride[] = [
  {
    id: 1,
    riderName: "Jumar Bari",
    pickup: "Jumarbari",
    destination: "Barokona",
    status: "requested",
    requestedAt: new Date().toISOString(),
  },
  {
    id: 2,
    riderName: "Ut Eos",
    pickup: "Ut eos cum et lauda",
    destination: "Chittagong",
    status: "requested",
    requestedAt: new Date(Date.now() - 2_400_000).toISOString(),
  },
  {
    id: 3,
    riderName: "Rangpur User",
    pickup: "Ut eos cum et lauda",
    destination: "Rangpur",
    status: "requested",
    requestedAt: new Date(Date.now() - 4_800_000).toISOString(),
  },
  {
    id: 4,
    riderName: "Dhaka Rider",
    pickup: "Banani",
    destination: "Dhanmondi",
    status: "accepted",
    requestedAt: new Date(Date.now() - 7_200_000).toISOString(),
  },
  {
    id: 5,
    riderName: "Sylhet Rider",
    pickup: "Amberkhana",
    destination: "Shahjalal U.",
    status: "ongoing",
    requestedAt: new Date(Date.now() - 9_200_000).toISOString(),
  },
];

// ---------- Card ----------
const StatusPill: React.FC<{ status: Ride["status"] }> = ({ status }) => {
  const color =
    status === "requested"
      ? "bg-amber-100 text-amber-800"
      : status === "accepted"
      ? "bg-emerald-100 text-emerald-700"
      : status === "ongoing"
      ? "bg-blue-100 text-blue-700"
      : status === "completed"
      ? "bg-gray-100 text-gray-700"
      : "bg-rose-100 text-rose-700";
  const label = status[0].toUpperCase() + status.slice(1);
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${color}`}>
      <BadgeCheck className="w-3.5 h-3.5" /> {label}
    </span>
  );
};


const RideCard: React.FC<{ ride: Ride }> = ({ ride }) => {
  const dt = new Date(ride.requestedAt);
  const time = dt.toLocaleString();

  return (
    <div className="group h-full">
      <div
        className="h-full rounded-2xl p-5 shadow-md 
        bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-300
        flex flex-col justify-between transition-transform hover:scale-[1.02] text-gray-900"
      >
        <div className="flex items-start justify-between">
          <div className="text-sm font-bold bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
            Ride #{ride.id}
          </div>
          <StatusPill status={ride.status} />
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <MapPin className="w-4 h-4" />
            <span>
              Pickup: <span className="font-normal">{ride.pickup}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <Navigation className="w-4 h-4" />
            <span>
              Destination: <span className="font-normal">{ride.destination}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Clock className="w-4 h-4" />
            <span>Requested: {time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- Carousel ----------

type Props = {
  title?: string;
  rides?: Ride[];
  className?: string;
  options?: EmblaOptionsType;
};

export default function RideRequestsCarousel({
  title = "Latest Ride Requests",
  rides = sampleRides,
  className = "",
  options,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      ...options,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (


    <section className={`w-full ${className}`} aria-label="Ride requests carousel">
  <div className="mb-6 text-center">
    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight 
      bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 
      bg-clip-text text-transparent">
      {title}
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
      See who's requesting rides right now — live updates for new users.
    </p>
  </div>

  <div className="embla overflow-hidden px-[10%]" ref={emblaRef}>
    <div className="embla__container flex">
      {rides.map((ride) => (
        <div
          key={ride.id}
          className="embla__slide shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pr-4"
        >
          <RideCard ride={ride} />
        </div>
      ))}
    </div>
  </div>

  <div className="mt-4 flex items-center justify-center gap-2">
    {scrollSnaps.map((_, i) => (
      <button
        key={i}
        onClick={() => scrollTo(i)}
        className={`h-2.5 w-2.5 rounded-full transition-all ${
          i === selectedIndex ? "w-6 bg-orange-900" : "bg-gray-300"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
</section>



  );
}






import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img7.jpg";
import img7 from "../assets/img8.png";
import img8 from "../assets/RideExpeditions-Logo-Final_Version_3_Main_3000x968px.png";


import HowToRideSteps from "../pages/HowToRideStep";
import HeroCarousel from "../pages/HeroCarosoul";
import RideRequestsCarousel from "../lib/Herocard";
import Testimonial from "../lib/Testimoniral";
import Footer from "../lib/Footer";
import WhatsAppStickyButton from "../lib/WhatStickyButton";
import Marquee from "../lib/Marquee";

import SimpleAccordion from "../lib/AccordianItem";



export default function MainLayout() {
  return (
    <div className="">
      <Navbar></Navbar>

      <HeroCarousel></HeroCarousel>

      <div>
        <HowToRideSteps></HowToRideSteps>
      </div>

      <div className="max-w-76 mx-auto mt-28">
        <RideRequestsCarousel></RideRequestsCarousel>
      </div>

      <div className="mt-32">
        <div className="mb-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight 
      bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 
      bg-clip-text text-transparent"
          >
            Our Biggest's Partnerships Network Company
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            See who's requesting rides right now — live updates for new users.
          </p>
        </div>

        <Marquee speed={40} pauseOnHover repeat={6}>
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center mx-4 p-4 hover:scale-105 transition-transform">
            <img src={img1} alt="Logo1" className="h-16 object-contain" />
          </div>
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center mx-4 p-4 hover:scale-105 transition-transform">
            <img src={img2} alt="Logo1" className="h-16 object-contain" />
          </div>
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center mx-4 p-4 hover:scale-105 transition-transform">
            <img src={img3} alt="Logo1" className="h-16 object-contain" />
          </div>
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center mx-4 p-4 hover:scale-105 transition-transform">
            <img src={img4} alt="Logo1" className="h-16 object-contain" />
          </div>
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center mx-4 p-4 hover:scale-105 transition-transform">
            <img src={img5} alt="Logo1" className="h-16 object-contain" />
          </div>
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center mx-4 p-4 hover:scale-105 transition-transform">
            <img src={img6} alt="Logo1" className="h-16 object-contain" />
          </div>
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center mx-4 p-4 hover:scale-105 transition-transform">
            <img src={img7} alt="Logo1" className="h-16 object-contain" />
          </div>
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center mx-4 p-4 hover:scale-105 transition-transform">
            <img src={img8} alt="Logo1" className="h-16 object-contain" />
          </div>
    
        </Marquee>
      </div>

      <div>

        <SimpleAccordion></SimpleAccordion>

       


      </div>

      <div className=" mt-28">
        <Testimonial></Testimonial>
      </div>
      <div>
        <WhatsAppStickyButton></WhatsAppStickyButton>
        <Footer></Footer>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

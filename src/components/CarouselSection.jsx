import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const HeroCarousel = () => {
  return (
    <section
      className="relative w-full h-screen"
      aria-label="Hero carousel showcasing Nainital Cab Services with scenic and religious travel destinations in Uttarakhand"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/images/ranikhet1.jpg"
              alt="Ranikhet scenic taxi ride with Nainital Cab Services"
              title="Comfortable taxi rides to Ranikhet with Nainital Cab Services"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
                Travel the Hills <br /> with Comfort & Care
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
                Book instantly and travel stress-free with our trusted taxi
                service across Uttarakhand.
              </p>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/images/nainital4.webp"
              alt="Taxi services in Nainital with safe and reliable rides"
              title="Safe and reliable taxi rides in Nainital with Nainital Cab Services"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
                Reliable Rides <br /> Anytime, Anywhere
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
                From short trips to long journeys, Nainital Cabs ensures safe,
                comfortable travel experiences.
              </p>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src="/images/jageshwardham.jpeg"
              alt="Taxi ride to Jageshwar Dham temple, Uttarakhand"
              title="Spiritual taxi rides to Jageshwar Dham temple with Nainital Cab Services"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
                Ride to the <br /> Abode of Gods
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
                Experience seamless travel to Uttarakhand’s sacred temples and
                spiritual sites with our taxi service.
              </p>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Persistent Book Now Button */}
      <motion.a
        href="https://wa.me/917302215985?text=Hello,%20I%20would%20like%20to%20book%20a%20taxi."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-10 left-10 z-20 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md shadow-md cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-yellow-500"
        aria-label="Book a taxi in Nainital and Uttarakhand via WhatsApp"
      >
        Book Now
      </motion.a>

      {/* Arrow Styling */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 221, 0, 0.2);
          color: #FFD700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: rgba(255, 221, 0, 0.5);
          color: black;
          transform: scale(1.15);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;

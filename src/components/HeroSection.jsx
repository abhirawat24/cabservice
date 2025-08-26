import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-black text-white w-full h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-20">
      {/* Left Content */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex flex-col gap-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Reliable <span className="text-yellow-400">Taxi Service</span> <br />
          in Lake City
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg">
          Book your ride instantly with our safe and comfortable taxi services.
          Available 24/7 for your convenience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 relative overflow-hidden group">
            Book Now
            <span className="absolute top-0 right-[-8px] bottom-0 w-2 bg-black skew-x-12 group-hover:bg-white"></span>
          </button>
          <button className="border border-yellow-400 text-yellow-400 px-6 py-3 font-semibold hover:bg-yellow-400 hover:text-black transition">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 mt-8 md:mt-0 flex justify-center bg-black"
      >
        <div>
        <img
          src="/heroSection1.png"
          alt="Taxi Service"
          className="max-w-[280px] sm:max-w-[320px] md:max-w-[420px] w-full h-auto object-contain drop-shadow-2xl"
        />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

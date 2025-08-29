import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className="bg-black text-white w-full h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-20">
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
          24/7 taxi service for your comfort and convenience. Book your ride in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://api.whatsapp.com/send/?phone=917302215985&text=Hi%2C+I+am+interested+in+booking+a+ride+with+NainitalCabs.+Can+you+please+share+the+available+options+and+pricing%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 font-semibold rounded-full border-2 border-yellow-400 bg-yellow-400 text-black cursor-pointer shadow-md hover:bg-black hover:text-yellow-400 transition-all duration-300">
              Book Now on WhatsApp
            </button>
          </a>

          <a href="tel:+917500769531">
            <button className="flex flex-row items-center gap-2 border-2 border-yellow-400 text-yellow-400 px-6 py-3 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
              <FaPhoneAlt className="text-lg" />
              Call Us
            </button>
          </a>
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
